"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3StorageAdapter = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let S3StorageAdapter = class S3StorageAdapter {
    config;
    client = null;
    bucket = null;
    constructor(config) {
        this.config = config;
    }
    resolveClient() {
        if (this.client && this.bucket) {
            return { client: this.client, bucket: this.bucket };
        }
        const endpoint = this.config.get('S3_ENDPOINT');
        const bucket = this.config.get('S3_BUCKET');
        const accessKey = this.config.get('S3_ACCESS_KEY');
        const secretKey = this.config.get('S3_SECRET_KEY');
        if (!bucket || !accessKey || !secretKey) {
            throw new common_1.InternalServerErrorException('S3/R2 storage is not configured (S3_BUCKET, S3_ACCESS_KEY, S3_SECRET_KEY)');
        }
        this.bucket = bucket;
        this.client = new client_s3_1.S3Client({
            region: this.config.get('S3_REGION', 'auto'),
            endpoint: endpoint || undefined,
            forcePathStyle: Boolean(endpoint),
            credentials: {
                accessKeyId: accessKey,
                secretAccessKey: secretKey,
            },
        });
        return { client: this.client, bucket: this.bucket };
    }
    async upload(key, buffer, mimeType) {
        const { client, bucket } = this.resolveClient();
        await client.send(new client_s3_1.PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: buffer,
            ContentType: mimeType,
        }));
        return { key };
    }
    async delete(key) {
        const { client, bucket } = this.resolveClient();
        await client.send(new client_s3_1.DeleteObjectCommand({ Bucket: bucket, Key: key }));
    }
    async getSignedUrl(key, ttlSeconds) {
        const { client, bucket } = this.resolveClient();
        const command = new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key });
        return (0, s3_request_presigner_1.getSignedUrl)(client, command, { expiresIn: ttlSeconds });
    }
    async stream(key) {
        const { client, bucket } = this.resolveClient();
        const response = await client.send(new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key }));
        if (!response.Body) {
            throw new Error(`File not found: ${key}`);
        }
        return response.Body;
    }
    async exists(key) {
        const { client, bucket } = this.resolveClient();
        try {
            await client.send(new client_s3_1.HeadObjectCommand({ Bucket: bucket, Key: key }));
            return true;
        }
        catch {
            return false;
        }
    }
};
exports.S3StorageAdapter = S3StorageAdapter;
exports.S3StorageAdapter = S3StorageAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], S3StorageAdapter);
//# sourceMappingURL=s3-storage.adapter.js.map