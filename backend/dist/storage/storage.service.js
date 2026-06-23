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
exports.StorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const path_1 = require("path");
const local_storage_adapter_1 = require("./local-storage.adapter");
const s3_storage_adapter_1 = require("./s3-storage.adapter");
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
let StorageService = class StorageService {
    adapter;
    maxUploadBytes;
    publicBaseUrl;
    driver;
    constructor(config, localAdapter, s3Adapter) {
        this.driver = config.get('STORAGE_DRIVER', 'local');
        const useS3 = this.driver === 's3' || this.driver === 'r2';
        this.adapter = useS3 ? s3Adapter : localAdapter;
        const maxMb = config.get('MAX_UPLOAD_SIZE_MB', 100);
        this.maxUploadBytes = maxMb * 1024 * 1024;
        const publicUrl = config.get('STORAGE_PUBLIC_URL', '').trim();
        this.publicBaseUrl = publicUrl ? publicUrl.replace(/\/$/, '') : null;
    }
    isRemoteStorage() {
        return this.driver === 's3' || this.driver === 'r2';
    }
    assertSize(buffer) {
        if (buffer.length > this.maxUploadBytes) {
            throw new common_1.BadRequestException('File exceeds maximum upload size');
        }
    }
    assertImageMime(mimeType) {
        if (!IMAGE_MIMES.has(mimeType)) {
            throw new common_1.BadRequestException('Unsupported image type');
        }
    }
    assertScriptMime(mimeType) {
        if (!SCRIPT_MIMES.has(mimeType)) {
            throw new common_1.BadRequestException('Unsupported script file type');
        }
    }
    buildKey(prefix, originalName) {
        const ext = (0, path_1.extname)(originalName) || '';
        return `${prefix}/${(0, crypto_1.randomUUID)()}${ext}`;
    }
    upload(key, buffer, mimeType) {
        return this.adapter.upload(key, buffer, mimeType);
    }
    delete(key) {
        return this.adapter.delete(key);
    }
    getSignedUrl(key, ttlSeconds = 300) {
        return this.adapter.getSignedUrl(key, ttlSeconds);
    }
    async stream(key) {
        const exists = await this.adapter.exists(key);
        if (!exists) {
            throw new common_1.NotFoundException('File not found');
        }
        return this.adapter.stream(key);
    }
    getPublicUrl(keyOrUrl) {
        if (keyOrUrl.startsWith('http://') ||
            keyOrUrl.startsWith('https://')) {
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
};
exports.StorageService = StorageService;
exports.StorageService = StorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        local_storage_adapter_1.LocalStorageAdapter,
        s3_storage_adapter_1.S3StorageAdapter])
], StorageService);
//# sourceMappingURL=storage.service.js.map