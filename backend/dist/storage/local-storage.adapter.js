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
exports.LocalStorageAdapter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const fs_1 = require("fs");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let LocalStorageAdapter = class LocalStorageAdapter {
    uploadDir;
    constructor(config) {
        this.uploadDir = config.get('UPLOAD_DIR', './uploads');
    }
    resolvePath(key) {
        return (0, path_1.join)(this.uploadDir, key);
    }
    async upload(key, buffer, _mimeType) {
        const filePath = this.resolvePath(key);
        await (0, promises_1.mkdir)((0, path_1.dirname)(filePath), { recursive: true });
        await (0, promises_1.writeFile)(filePath, buffer);
        return { key };
    }
    async delete(key) {
        const filePath = this.resolvePath(key);
        if ((0, fs_1.existsSync)(filePath)) {
            await (0, promises_1.unlink)(filePath);
        }
    }
    async getSignedUrl(key, _ttlSeconds) {
        return `/api/storage/local/${encodeURIComponent(key)}`;
    }
    async stream(key) {
        const filePath = this.resolvePath(key);
        if (!(0, fs_1.existsSync)(filePath)) {
            throw new Error(`File not found: ${key}`);
        }
        return (0, fs_1.createReadStream)(filePath);
    }
    async exists(key) {
        return (0, fs_1.existsSync)(this.resolvePath(key));
    }
};
exports.LocalStorageAdapter = LocalStorageAdapter;
exports.LocalStorageAdapter = LocalStorageAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], LocalStorageAdapter);
//# sourceMappingURL=local-storage.adapter.js.map