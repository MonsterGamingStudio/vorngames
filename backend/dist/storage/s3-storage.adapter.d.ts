import { ConfigService } from '@nestjs/config';
import { StorageAdapter } from './storage.interface';
export declare class S3StorageAdapter implements StorageAdapter {
    private readonly client;
    private readonly bucket;
    constructor(config: ConfigService);
    upload(key: string, buffer: Buffer, mimeType: string): Promise<{
        key: string;
    }>;
    delete(key: string): Promise<void>;
    getSignedUrl(key: string, ttlSeconds: number): Promise<string>;
    stream(key: string): Promise<NodeJS.ReadableStream>;
    exists(key: string): Promise<boolean>;
}
