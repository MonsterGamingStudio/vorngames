import { ConfigService } from '@nestjs/config';
import { LocalStorageAdapter } from './local-storage.adapter';
import { S3StorageAdapter } from './s3-storage.adapter';
export declare class StorageService {
    private readonly adapter;
    private readonly maxUploadBytes;
    private readonly publicBaseUrl;
    private readonly driver;
    constructor(config: ConfigService, localAdapter: LocalStorageAdapter, s3Adapter: S3StorageAdapter);
    isRemoteStorage(): boolean;
    assertSize(buffer: Buffer): void;
    assertImageMime(mimeType: string): void;
    assertScriptMime(mimeType: string): void;
    buildKey(prefix: string, originalName: string): string;
    upload(key: string, buffer: Buffer, mimeType: string): Promise<{
        key: string;
    }>;
    delete(key: string): Promise<void>;
    getSignedUrl(key: string, ttlSeconds?: number): Promise<string>;
    stream(key: string): Promise<NodeJS.ReadableStream>;
    getPublicUrl(keyOrUrl: string): string;
}
