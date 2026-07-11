import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createReadStream, existsSync } from 'fs';
import { mkdir, unlink, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { StorageAdapter } from './storage.interface';

@Injectable()
export class LocalStorageAdapter implements StorageAdapter {
  private readonly logger = new Logger('LocalStorage');
  private readonly uploadDir: string;

  constructor(config: ConfigService) {
    this.uploadDir = config.get<string>('UPLOAD_DIR', './uploads');
  }

  private resolvePath(key: string): string {
    return join(this.uploadDir, key);
  }

  async upload(
    key: string,
    buffer: Buffer,
    mimeType: string,
  ): Promise<{ key: string }> {
    const filePath = this.resolvePath(key);
    const startedAt = Date.now();

    this.logger.log(
      `[write:start] ${JSON.stringify({
        key,
        filePath,
        uploadDir: this.uploadDir,
        mimeType,
        size: buffer.length,
      })}`,
    );

    try {
      await mkdir(dirname(filePath), { recursive: true });
      await writeFile(filePath, buffer);
      this.logger.log(
        `[write:ok] ${JSON.stringify({
          key,
          filePath,
          durationMs: Date.now() - startedAt,
        })}`,
      );
      return { key };
    } catch (error) {
      this.logger.error(
        `[write:fail] ${JSON.stringify({
          key,
          filePath,
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

  async delete(key: string): Promise<void> {
    const filePath = this.resolvePath(key);
    if (existsSync(filePath)) {
      await unlink(filePath);
    }
  }

  async getSignedUrl(key: string, _ttlSeconds: number): Promise<string> {
    return `/api/storage/local/${encodeURIComponent(key)}`;
  }

  async stream(key: string): Promise<NodeJS.ReadableStream> {
    const filePath = this.resolvePath(key);
    if (!existsSync(filePath)) {
      throw new Error(`File not found: ${key}`);
    }
    return createReadStream(filePath);
  }

  async exists(key: string): Promise<boolean> {
    return existsSync(this.resolvePath(key));
  }
}
