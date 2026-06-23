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
exports.AdminScriptsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const scripts_service_1 = require("./scripts.service");
class CreateScriptBodyDto {
    title;
    slug;
    shortDescription;
    gameCategory;
    priceRub;
    priceUsd;
    discountPercent;
    badge;
    instructionHtml;
    isPublished;
    featuredOnHome;
}
class AddMediaBodyDto {
    type;
    url;
    sortOrder;
}
let AdminScriptsController = class AdminScriptsController {
    scripts;
    constructor(scripts) {
        this.scripts = scripts;
    }
    listAll() {
        return this.scripts.listAll();
    }
    create(body) {
        return this.scripts.create(body);
    }
    update(id, body) {
        return this.scripts.update(id, body);
    }
    remove(id) {
        return this.scripts.unpublish(id);
    }
    addMedia(id, body) {
        return this.scripts.addMedia(id, body);
    }
    uploadImage(id, file, sortOrder) {
        return this.scripts.uploadImage(id, file, Number(sortOrder) || 0);
    }
    uploadVersion(id, file, versionLabel) {
        return this.scripts.addVersion(id, file, versionLabel || '1.0');
    }
    stats(id, from, to) {
        return this.scripts.getStats(id, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
    }
};
exports.AdminScriptsController = AdminScriptsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all scripts (admin)' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "listAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create script' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateScriptBodyDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update script' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateScriptBodyDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Unpublish script' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    (0, swagger_1.ApiOperation)({ summary: 'Add media URL or YouTube link' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AddMediaBodyDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "addMedia", null);
__decorate([
    (0, common_1.Post)(':id/media/upload'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload image' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)(':id/versions'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload new script version' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)('versionLabel')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "uploadVersion", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Script statistics' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('from')),
    __param(2, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "stats", null);
exports.AdminScriptsController = AdminScriptsController = __decorate([
    (0, swagger_1.ApiTags)('admin/scripts'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('admin/scripts'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard, guards_1.AdminGuard),
    __metadata("design:paramtypes", [scripts_service_1.ScriptsService])
], AdminScriptsController);
//# sourceMappingURL=admin-scripts.controller.js.map