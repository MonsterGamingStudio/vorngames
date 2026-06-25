import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';
import { StorageAdapter } from './storage.interface';

@Injectable()
export class S3StorageAdapter implements StorageAdapter {
  private client: S3Client | null = null;
  private bucket: string | null = null;

  constructor(private readonly config: ConfigService) {}

  private resolveClient(): { client: S3Client; bucket: string } {
    if (this.client && this.bucket) {
      return { client: this.client, bucket: this.bucket };
    }

    const endpoint = this.config.get<string>('S3_ENDPOINT');
    const bucket = this.config.get<string>('S3_BUCKET');
    const accessKey = this.config.get<string>('S3_ACCESS_KEY');
    const secretKey = this.config.get<string>('S3_SECRET_KEY');

    if (!bucket || !accessKey || !secretKey) {
      throw new InternalServerErrorException(
        'S3/R2 storage is not configured (S3_BUCKET, S3_ACCESS_KEY, S3_SECRET_KEY)',
      );
    }

    this.bucket = bucket;
    this.client = new S3Client({
      region: this.config.get<string>('S3_REGION', 'auto'),
      endpoint: endpoint || undefined,
      forcePathStyle: Boolean(endpoint),
      credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
      },
    });

    return { client: this.client, bucket: this.bucket };
  }

  async upload(
    key: string,
    buffer: Buffer,
    mimeType: string,
  ): Promise<{ key: string }> {
    const { client, bucket } = this.resolveClient();
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buffer,
        ContentType: mimeType,
      }),
    );
    return { key };
  }

  async delete(key: string): Promise<void> {
    const { client, bucket } = this.resolveClient();
    await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }));
  }

  async getSignedUrl(key: string, ttlSeconds: number): Promise<string> {
    const { client, bucket } = this.resolveClient();
    const command = new GetObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: ttlSeconds });
  }

  async stream(key: string): Promise<NodeJS.ReadableStream> {
    const { client, bucket } = this.resolveClient();
    const response = await client.send(
      new GetObjectCommand({ Bucket: bucket, Key: key }),
    );
    if (!response.Body) {
      throw new Error(`File not found: ${key}`);
    }
    return response.Body as Readable;
  }

  async exists(key: string): Promise<boolean> {
    const { client, bucket } = this.resolveClient();
    try {
      await client.send(new HeadObjectCommand({ Bucket: bucket, Key: key }));
      return true;
    } catch {
      return false;
    }
  }
}
