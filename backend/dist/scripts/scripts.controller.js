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
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const guards_1 = require("../auth/guards");
const utils_1 = require("../common/utils");
const scripts_service_1 = require("./scripts.service");
let ScriptsController = class ScriptsController {
    scripts;
    constructor(scripts) {
        this.scripts = scripts;
    }
    list(search, gameCategory, sort, page, limit) {
        const pagination = (0, utils_1.parsePagination)({ page, limit });
        return this.scripts.list({
            search,
            gameCategory,
            sort,
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
    (0, swagger_1.ApiOperation)({ summary: 'List published scripts' }),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('gameCategory')),
    __param(2, (0, common_1.Query)('sort')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('home/random'),
    (0, swagger_1.ApiOperation)({ summary: 'Random scripts for homepage' }),
    __param(0, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "getRandom", null);
__decorate([
    (0, common_1.Get)('home/popular'),
    (0, swagger_1.ApiOperation)({ summary: 'Popular scripts in last 24h' }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "getPopular", null);
__decorate([
    (0, common_1.Get)(':slug'),
    (0, swagger_1.ApiOperation)({ summary: 'Get script by slug' }),
    (0, common_1.UseGuards)(guards_1.OptionalJwtAuthGuard),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScriptsController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Post)(':id/view'),
    (0, swagger_1.ApiOperation)({ summary: 'Record script view' }),
    (0, common_1.UseGuards)(guards_1.OptionalJwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ScriptsController.prototype, "recordView", null);
__decorate([
    (0, common_1.Post)(':id/click'),
    (0, swagger_1.ApiOperation)({ summary: 'Record buy button click' }),
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