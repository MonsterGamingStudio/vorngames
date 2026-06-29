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
exports.PaymentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const api_docs_1 = require("../common/swagger/api-docs");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const create_payment_response_dto_1 = require("./dto/create-payment-response.dto");
const payments_api_secret_guard_1 = require("./guards/payments-api-secret.guard");
const payments_constants_1 = require("./payments.constants");
const payments_service_1 = require("./payments.service");
let PaymentsController = class PaymentsController {
    paymentsService;
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    createPayment(dto) {
        return this.paymentsService.createPayment(dto);
    }
    async unitpayHandler(req) {
        const method = String(req.query.method ?? '');
        const params = this.parseUnitpayParams(req.query);
        const clientIp = this.resolveClientIp(req);
        return this.paymentsService.handleUnitpayWebhook(method, params, clientIp);
    }
    parseUnitpayParams(query) {
        const nested = query.params;
        if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
            return nested;
        }
        const params = {};
        for (const [key, value] of Object.entries(query)) {
            const match = key.match(/^params\[(.+)\]$/);
            if (!match)
                continue;
            if (Array.isArray(value)) {
                params[match[1]] = value[0];
            }
            else if (value != null) {
                params[match[1]] = value;
            }
        }
        return params;
    }
    resolveClientIp(req) {
        const forwarded = req.headers['x-forwarded-for'];
        if (typeof forwarded === 'string') {
            return forwarded.split(',')[0]?.trim();
        }
        return req.ip;
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseGuards)(payments_api_secret_guard_1.PaymentsApiSecretGuard),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.payments.create),
    (0, swagger_1.ApiHeader)({
        name: payments_constants_1.PAYMENTS_API_SECRET_HEADER,
        required: true,
        description: 'Shared payments API secret (same as WS callback)',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, type: create_payment_response_dto_1.CreatePaymentResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createPayment", null);
__decorate([
    (0, common_1.Get)('unitpay/handler'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.payments.unitpayHandler),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "unitpayHandler", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('payments'),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map