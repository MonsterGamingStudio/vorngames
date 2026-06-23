import { ConfigService } from '@nestjs/config';
import { StorageAdapter } from './storage.interface';
export declare class LocalStorageAdapter implements StorageAdapter {
    private readonly uploadDir;
    constructor(config: ConfigService);
    private resolvePath;
    upload(key: string, buffer: Buffer, _mimeType: string): Promise<{
        key: string;
    }>;
    delete(key: string): Promise<void>;
    getSignedUrl(key: string, _ttlSeconds: number): Promise<string>;
    stream(key: string): Promise<NodeJS.ReadableStream>;
    exists(key: string): Promise<boolean>;
}
