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
exports.PurchasesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const api_docs_1 = require("../common/swagger/api-docs");
const purchase_dto_1 = require("./dto/purchase.dto");
const purchases_service_1 = require("./purchases.service");
let PurchasesController = class PurchasesController {
    purchases;
    constructor(purchases) {
        this.purchases = purchases;
    }
    purchase(id, req, query) {
        const cur = query.currency?.toUpperCase() === 'USD' ? client_1.Currency.USD : client_1.Currency.RUB;
        return this.purchases.createPurchase(req.user, id, cur);
    }
    list(req) {
        return this.purchases.listUserPurchases(req.user.id);
    }
    async download(id, req, res) {
        await this.purchases.download(id, req.user.id, res);
    }
};
exports.PurchasesController = PurchasesController;
__decorate([
    (0, common_1.Post)('scripts/:id/purchase'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.purchases.create),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid', description: 'Script ID' }),
    (0, swagger_1.ApiQuery)({ name: 'currency', required: false, enum: ['RUB', 'USD'] }),
    (0, swagger_1.ApiOkResponse)({ type: purchase_dto_1.CreatePurchaseResponseDto }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Authentication required — purchase is not available to guests',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, purchase_dto_1.CreatePurchaseQueryDto]),
    __metadata("design:returntype", void 0)
], PurchasesController.prototype, "purchase", null);
__decorate([
    (0, common_1.Get)('profile/purchases'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.purchases.list),
    (0, swagger_1.ApiOkResponse)({ type: purchase_dto_1.PurchaseItemDto, isArray: true }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PurchasesController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('purchases/:id/download'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.purchases.download),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid', description: 'Purchase ID' }),
    (0, swagger_1.ApiProduces)('application/octet-stream'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "download", null);
exports.PurchasesController = PurchasesController = __decorate([
    (0, swagger_1.ApiTags)('purchases'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __metadata("design:paramtypes", [purchases_service_1.PurchasesService])
], PurchasesController);
//# sourceMappingURL=purchases.controller.js.map