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
exports.AdminController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const api_docs_1 = require("../common/swagger/api-docs");
const utils_1 = require("../common/utils");
const purchase_dto_1 = require("../purchases/dto/purchase.dto");
const prisma_service_1 = require("../prisma/prisma.service");
const purchases_service_1 = require("../purchases/purchases.service");
const scripts_service_1 = require("../scripts/scripts.service");
const users_service_1 = require("../users/users.service");
const admin_dto_1 = require("./dto/admin.dto");
let AdminController = class AdminController {
    users;
    purchases;
    scripts;
    prisma;
    constructor(users, purchases, scripts, prisma) {
        this.users = users;
        this.purchases = purchases;
        this.scripts = scripts;
        this.prisma = prisma;
    }
    async listUsers(query) {
        const pagination = (0, utils_1.parsePagination)({
            page: query.page,
            limit: query.limit,
        });
        return this.users.listUsers({
            search: query.search,
            skip: pagination.skip,
            take: pagination.limit,
        });
    }
    updateUser(id, body) {
        return this.users.updateUser(id, body);
    }
    grantPurchase(id, body) {
        return this.purchases.grantPurchase(id, body.scriptId, body.currency ?? client_1.Currency.RUB);
    }
    revokePurchase(purchaseId) {
        return this.purchases.revokePurchase(purchaseId);
    }
    async blockIp(body) {
        return this.prisma.ipBlock.upsert({
            where: { ip: body.ip },
            create: { ip: body.ip, reason: body.reason },
            update: { reason: body.reason },
        });
    }
    unblockIp(ip) {
        return this.prisma.ipBlock.delete({ where: { ip } });
    }
    async dashboard() {
        const [users, scripts, purchases, openTickets, pendingComments] = await Promise.all([
            this.prisma.user.count(),
            this.prisma.script.count({ where: { isPublished: true } }),
            this.prisma.purchase.count(),
            this.prisma.supportTicket.count({ where: { status: 'open' } }),
            this.prisma.comment.count({ where: { status: 'pending' } }),
        ]);
        return { users, scripts, purchases, openTickets, pendingComments };
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('users'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.listUsers),
    (0, swagger_1.ApiOkResponse)({
        schema: {
            properties: {
                items: { type: 'array', items: { type: 'object' } },
                total: { type: 'number', example: 100 },
            },
        },
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.AdminUsersQueryDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "listUsers", null);
__decorate([
    (0, common_1.Patch)('users/:id'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.updateUser),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: admin_dto_1.UpdateUserDto }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, admin_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Post)('users/:id/purchases/grant'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.grantPurchase),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid', description: 'User ID' }),
    (0, swagger_1.ApiBody)({ type: purchase_dto_1.GrantPurchaseDto }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchase_dto_1.GrantPurchaseDto]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "grantPurchase", null);
__decorate([
    (0, common_1.Delete)('users/:userId/purchases/:purchaseId'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.revokePurchase),
    (0, swagger_1.ApiParam)({ name: 'userId', format: 'uuid' }),
    (0, swagger_1.ApiParam)({ name: 'purchaseId', format: 'uuid' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('purchaseId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "revokePurchase", null);
__decorate([
    (0, common_1.Post)('ip-blocks'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.blockIp),
    (0, swagger_1.ApiBody)({ type: admin_dto_1.IpBlockDto }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [admin_dto_1.IpBlockDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "blockIp", null);
__decorate([
    (0, common_1.Delete)('ip-blocks/:ip'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.unblockIp),
    (0, swagger_1.ApiParam)({ name: 'ip', example: '203.0.113.10' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('ip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminController.prototype, "unblockIp", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.admin.dashboard),
    (0, swagger_1.ApiOkResponse)({ type: admin_dto_1.AdminDashboardDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "dashboard", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('admin'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard, guards_1.AdminGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        purchases_service_1.PurchasesService,
        scripts_service_1.ScriptsService,
        prisma_service_1.PrismaService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map