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
exports.ScriptsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const guards_1 = require("../auth/guards");
const common_dto_1 = require("../common/dto/common.dto");
const utils_1 = require("../common/utils");
const script_dto_1 = require("./dto/script.dto");
const scripts_service_1 = require("./scripts.service");
let ScriptsController = class ScriptsController {
    scripts;
    constructor(scripts) {
        this.scripts = scripts;
    }
    list(query) {
        const pagination = (0, utils_1.parsePagination)({
            page: query.page,
            limit: query.limit,
        });
        return this.scripts.list({
            search: query.search,
            gameCategory: query.gameCategory,
            sort: query.sort,
            page: pagination.page,
            limit: pagination.limit,
        });
    }
    getRandom(count) {
        return this.scripts.getRandom(Number(count) || 4);
    }
    getPopular(limit) {
        return this.scripts.getPopular(Number(limit) || 8);
    }
    async getBySlug(slug, req) {
        const script = await this.scripts.findBySlug(slug);
        const detail = this.scripts.toDetail(script, req.user?.id);
        return this.scripts.enrichDetailWithPurchase(detail, req.user?.id);
    }
    recordView(id, req) {
        const ipHash = (0, utils_1.hashIp)((0, utils_1.getClientIp)(req));
        return this.scripts.recordView(id, req.user?.id ?? null, ipHash);
    }
    recordClick(id, req) {
        const ipHash = (0, utils_1.hashIp)((0, utils_1.getClientIp)(req));
        return this.scripts.recordClick(id, req.user?.id ?? null, ipHash);
    }
};
exports.ScriptsController = ScriptsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List published scripts with search, filters and sort' }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptListResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [script_dto_1.ScriptListQueryDto]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('home/random'),
    (0, swagger_1.ApiOperation)({ summary: 'Random scripts for homepage (default 4)' }),
    (0, swagger_1.ApiQuery)({ name: 'count', required: false, example: 4 }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptListItemWithMediaDto, isArray: true }),
    __param(0, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "getRandom", null);
__decorate([
    (0, common_1.Get)('home/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Popular scripts by views in last 24 hours' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, example: 8 }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptListItemWithMediaDto, isArray: true }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "getPopular", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get script card by slug',
        description: 'Optional auth via cookie: returns isAuthenticated, isPurchased, requiresAuthToPurchase',
    }),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'shop-tycoon' }),
    (0, swagger_1.ApiOkResponse)({ type: script_dto_1.ScriptDetailDto }),
    (0, common_1.UseGuards)(guards_1.OptionalJwtAuthGuard),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScriptsController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Post)(':id/view'),
    (0, swagger_1.ApiOperation)({ summary: 'Record script page view (analytics)' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiOkResponse)({ type: common_dto_1.OkResponseDto }),
    (0, common_1.UseGuards)(guards_1.OptionalJwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "recordView", null);
__decorate([
    (0, common_1.Post)(':id/click'),
    (0, swagger_1.ApiOperation)({ summary: 'Record buy button click (analytics)' }),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiOkResponse)({ type: common_dto_1.OkResponseDto }),
    (0, common_1.UseGuards)(guards_1.OptionalJwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "recordClick", null);
exports.ScriptsController = ScriptsController = __decorate([
    (0, swagger_1.ApiTags)('scripts'),
    (0, common_1.Controller)('scripts'),
    __metadata("design:paramtypes", [scripts_service_1.ScriptsService])
], ScriptsController);
//# sourceMappingURL=scripts.controller.js.map