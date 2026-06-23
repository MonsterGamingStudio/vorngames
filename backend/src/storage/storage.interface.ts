export interface StorageAdapter {
  upload(
    key: string,
    buffer: Buffer,
    mimeType: string,
  ): Promise<{ key: string }>;
  delete(key: string): Promise<void>;
  getSignedUrl(key: string, ttlSeconds: number): Promise<string>;
  stream(key: string): Promise<NodeJS.ReadableStream>;
  exists(key: string): Promise<boolean>;
}
