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
    client;
    bucket;
    constructor(config) {
        const endpoint = config.get('S3_ENDPOINT');
        this.bucket = config.getOrThrow('S3_BUCKET');
        this.client = new client_s3_1.S3Client({
            region: config.get('S3_REGION', 'auto'),
            endpoint: endpoint || undefined,
            forcePathStyle: Boolean(endpoint),
            credentials: {
                accessKeyId: config.getOrThrow('S3_ACCESS_KEY'),
                secretAccessKey: config.getOrThrow('S3_SECRET_KEY'),
            },
        });
    }
    async upload(key, buffer, mimeType) {
        await this.client.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucket,
            Key: key,
            Body: buffer,
            ContentType: mimeType,
        }));
        return { key };
    }
    async delete(key) {
        await this.client.send(new client_s3_1.DeleteObjectCommand({ Bucket: this.bucket, Key: key }));
    }
    async getSignedUrl(key, ttlSeconds) {
        const command = new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key });
        return (0, s3_request_presigner_1.getSignedUrl)(this.client, command, { expiresIn: ttlSeconds });
    }
    async stream(key) {
        const response = await this.client.send(new client_s3_1.GetObjectCommand({ Bucket: this.bucket, Key: key }));
        if (!response.Body) {
            throw new Error(`File not found: ${key}`);
        }
        return response.Body;
    }
    async exists(key) {
        try {
            await this.client.send(new client_s3_1.HeadObjectCommand({ Bucket: this.bucket, Key: key }));
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