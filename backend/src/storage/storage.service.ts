import {
  BadRequestException,
  Injectable,
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

@Injectable()
export class StorageService {
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

  assertSize(buffer: Buffer): void {
    if (buffer.length > this.maxUploadBytes) {
      throw new BadRequestException('File exceeds maximum upload size');
    }
  }

  assertImageMime(mimeType: string): void {
    if (!IMAGE_MIMES.has(mimeType)) {
      throw new BadRequestException('Unsupported image type');
    }
  }

  assertScriptMime(mimeType: string): void {
    if (!SCRIPT_MIMES.has(mimeType)) {
      throw new BadRequestException('Unsupported script file type');
    }
  }

  buildKey(prefix: string, originalName: string): string {
    const ext = extname(originalName) || '';
    return `${prefix}/${randomUUID()}${ext}`;
  }

  upload(
    key: string,
    buffer: Buffer,
    mimeType: string,
  ): Promise<{ key: string }> {
    return this.adapter.upload(key, buffer, mimeType);
  }

  delete(key: string): Promise<void> {
    return this.adapter.delete(key);
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
