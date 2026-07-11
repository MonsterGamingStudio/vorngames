import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { extname } from 'path';
import { StorageAdapter } from './storage.interface';
import { LocalStorageAdapter } from './local-storage.adapter';
import { S3StorageAdapter } from './s3-storage.adapter';

const IMAGE_MIMES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
]);

const SCRIPT_MIMES = new Set([
  'application/zip',
  'application/x-zip-compressed',
  'application/x-rar-compressed',
  'application/vnd.rar',
  'application/octet-stream',
]);

export type UploadContext = Record<string, unknown>;

@Injectable()
export class StorageService {
  private readonly logger = new Logger('StorageUpload');
  private readonly adapter: StorageAdapter;
  private readonly maxUploadBytes: number;
  private readonly publicBaseUrl: string | null;
  private readonly driver: string;

  constructor(
    config: ConfigService,
    localAdapter: LocalStorageAdapter,
    s3Adapter: S3StorageAdapter,
  ) {
    this.driver = config.get<string>('STORAGE_DRIVER', 'local');
    const useS3 = this.driver === 's3' || this.driver === 'r2';
    this.adapter = useS3 ? s3Adapter : localAdapter;
    const maxMb = config.get<number>('MAX_UPLOAD_SIZE_MB', 100);
    this.maxUploadBytes = maxMb * 1024 * 1024;
    const publicUrl = config.get<string>('STORAGE_PUBLIC_URL', '').trim();
    this.publicBaseUrl = publicUrl ? publicUrl.replace(/\/$/, '') : null;
  }

  isRemoteStorage(): boolean {
    return this.driver === 's3' || this.driver === 'r2';
  }

  assertSize(buffer: Buffer, context?: UploadContext): void {
    if (!buffer?.length) {
      this.logger.warn(
        `[validate:size] empty buffer ${JSON.stringify(context ?? {})}`,
      );
      throw new BadRequestException('File is empty or unreadable');
    }

    if (buffer.length > this.maxUploadBytes) {
      this.logger.warn(
        `[validate:size] too large ${JSON.stringify({
          ...context,
          size: buffer.length,
          maxBytes: this.maxUploadBytes,
        })}`,
      );
      throw new BadRequestException('File exceeds maximum upload size');
    }
  }

  assertImageMime(mimeType: string, context?: UploadContext): void {
    if (!IMAGE_MIMES.has(mimeType)) {
      this.logger.warn(
        `[validate:mime] unsupported image ${JSON.stringify({
          ...context,
          mimeType,
          allowed: [...IMAGE_MIMES],
        })}`,
      );
      throw new BadRequestException('Unsupported image type');
    }
  }

  assertScriptMime(mimeType: string, context?: UploadContext): void {
    if (!SCRIPT_MIMES.has(mimeType)) {
      this.logger.warn(
        `[validate:mime] unsupported script ${JSON.stringify({
          ...context,
          mimeType,
          allowed: [...SCRIPT_MIMES],
        })}`,
      );
      throw new BadRequestException('Unsupported script file type');
    }
  }

  buildKey(prefix: string, originalName: string): string {
    const ext = extname(originalName) || '';
    return `${prefix}/${randomUUID()}${ext}`;
  }

  async upload(
    key: string,
    buffer: Buffer,
    mimeType: string,
    context?: UploadContext,
  ): Promise<{ key: string }> {
    const meta = {
      driver: this.driver,
      key,
      mimeType,
      size: buffer.length,
      maxBytes: this.maxUploadBytes,
      ...context,
    };
    const startedAt = Date.now();

    this.logger.log(`[upload:start] ${JSON.stringify(meta)}`);

    try {
      const result = await this.adapter.upload(key, buffer, mimeType);
      this.logger.log(
        `[upload:ok] ${JSON.stringify({
          ...meta,
          storageKey: result.key,
          durationMs: Date.now() - startedAt,
        })}`,
      );
      return result;
    } catch (error) {
      this.logger.error(
        `[upload:fail] ${JSON.stringify({
          ...meta,
          durationMs: Date.now() - startedAt,
          error:
            error instanceof Error
              ? { name: error.name, message: error.message, stack: error.stack }
              : { message: String(error) },
        })}`,
      );
      throw error;
    }
  }

  async delete(key: string, context?: UploadContext): Promise<void> {
    this.logger.log(`[delete:start] ${JSON.stringify({ key, ...context })}`);
    try {
      await this.adapter.delete(key);
      this.logger.log(`[delete:ok] ${JSON.stringify({ key, ...context })}`);
    } catch (error) {
      this.logger.error(
        `[delete:fail] ${JSON.stringify({
          key,
          ...context,
          error:
            error instanceof Error
              ? { name: error.name, message: error.message, stack: error.stack }
              : { message: String(error) },
        })}`,
      );
      throw error;
    }
  }

  getSignedUrl(key: string, ttlSeconds = 300): Promise<string> {
    return this.adapter.getSignedUrl(key, ttlSeconds);
  }

  async stream(key: string): Promise<NodeJS.ReadableStream> {
    const exists = await this.adapter.exists(key);
    if (!exists) {
      throw new NotFoundException('File not found');
    }
    return this.adapter.stream(key);
  }

  getPublicUrl(keyOrUrl: string): string {
    if (
      keyOrUrl.startsWith('http://') ||
      keyOrUrl.startsWith('https://')
    ) {
      return keyOrUrl;
    }

    if (keyOrUrl.startsWith('/')) {
      return keyOrUrl;
    }

    if (this.publicBaseUrl) {
      return `${this.publicBaseUrl}/${keyOrUrl.split('/').map(encodeURIComponent).join('/')}`;
    }

    return `/api/storage/local/${keyOrUrl.split('/').map(encodeURIComponent).join('/')}`;
  }
}
