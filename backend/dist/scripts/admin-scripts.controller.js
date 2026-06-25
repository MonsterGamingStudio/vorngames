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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const common_dto_1 = require("../common/dto/common.dto");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const script_dto_1 = require("./dto/script.dto");
const scripts_service_1 = require("./scripts.service");
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
    uploadImage(id, file, body) {
        return this.scripts.uploadImage(id, file, body.sortOrder ?? 0);
    }
    listMedia(id) {
        return this.scripts.listMedia(id);
    }
    reorderMedia(id, body) {
        return this.scripts.reorderMedia(id, body.items);
    }
    removeMedia(id, mediaId) {
        return this.scripts.removeMedia(id, mediaId);
    }
    uploadVersion(id, file, body) {
        return this.scripts.addVersion(id, file, body.versionLabel || '1.0');
    }
    stats(id, from, to) {
        return this.scripts.getStats(id, from ? new Date(from) : undefined, to ? new Date(to) : undefined);
    }
};
exports.AdminScriptsController = AdminScriptsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all scripts including unpublished' }),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "listAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create script' }),
    (0, swagger_1.ApiBody)({ type: script_dto_1.CreateScriptDto }),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [script_dto_1.CreateScriptDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update script' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: script_dto_1.CreateScriptDto }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, script_dto_1.CreateScriptDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Unpublish script (soft delete)' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/media'),
    (0, swagger_1.ApiOperation)({ summary: 'Add media URL or YouTube link' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: script_dto_1.AddScriptMediaDto }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptMediaDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, script_dto_1.AddScriptMediaDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "addMedia", null);
__decorate([
    (0, common_1.Post)(':id/media/upload'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload image file' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['file'],
            properties: {
                file: { type: 'string', format: 'binary' },
                sortOrder: { type: 'number', example: 0 },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptMediaDto }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, script_dto_1.UploadImageBodyDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(':id/media'),
    (0, swagger_1.ApiOperation)({ summary: 'List script media' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptMediaDto, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "listMedia", null);
__decorate([
    (0, common_1.Patch)(':id/media/reorder'),
    (0, swagger_1.ApiOperation)({ summary: 'Reorder script media' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: script_dto_1.ReorderScriptMediaDto }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptMediaDto, isArray: true }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, script_dto_1.ReorderScriptMediaDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "reorderMedia", null);
__decorate([
    (0, common_1.Delete)(':id/media/:mediaId'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete script media' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiParam)({ name: 'mediaId', format: 'uuid' }),
    (0, swagger_1.ApiOkResponse)({ type: common_dto_1.OkResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('mediaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "removeMedia", null);
__decorate([
    (0, common_1.Post)(':id/versions'),
    (0, swagger_1.ApiOperation)({
        summary: 'Upload new script version',
        description: 'Notifies all purchasers about script_update',
    }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            required: ['file'],
            properties: {
                file: { type: 'string', format: 'binary', description: 'zip/rar archive' },
                versionLabel: { type: 'string', example: '1.2.0' },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, script_dto_1.UploadVersionBodyDto]),
    __metadata("design:returntype", void 0)
], AdminScriptsController.prototype, "uploadVersion", null);
__decorate([
    (0, common_1.Get)(':id/stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Script statistics (views, clicks, purchases, comments)' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiQuery)({ name: 'from', required: false, example: '2026-01-01' }),
    (0, swagger_1.ApiQuery)({ name: 'to', required: false, example: '2026-12-31' }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptStatsDto }),
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