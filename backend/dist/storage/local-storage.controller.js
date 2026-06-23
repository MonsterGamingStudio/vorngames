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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const fs_1 = require("fs");
const path_1 = require("path");
let LocalStorageController = class LocalStorageController {
    config;
    constructor(config) {
        this.config = config;
    }
    serve(key, res) {
        const uploadDir = this.config.get('UPLOAD_DIR', './uploads');
        const filePath = (0, path_1.join)(uploadDir, key);
        if (!(0, fs_1.existsSync)(filePath)) {
            throw new common_1.NotFoundException();
        }
        (0, fs_1.createReadStream)(filePath).pipe(res);
    }
};
exports.LocalStorageController = LocalStorageController;
__decorate([
    (0, common_1.Get)(':key(*)'),
    __param(0, (0, common_1.Param)('key')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LocalStorageController.prototype, "serve", null);
exports.LocalStorageController = LocalStorageController = __decorate([
    (0, swagger_1.ApiExcludeController)(),
    (0, common_1.Controller)('storage/local'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], LocalStorageController);
//# sourceMappingURL=local-storage.controller.js.map