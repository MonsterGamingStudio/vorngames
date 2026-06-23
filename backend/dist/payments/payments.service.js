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
var PaymentsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const purchases_service_1 = require("../purchases/purchases.service");
const unitpay_service_1 = require("./unitpay.service");
const ws_callback_service_1 = require("./ws-callback.service");
let PaymentsService = PaymentsService_1 = class PaymentsService {
    prisma;
    unitpay;
    wsCallback;
    purchasesService;
    logger = new common_1.Logger(PaymentsService_1.name);
    constructor(prisma, unitpay, wsCallback, purchasesService) {
        this.prisma = prisma;
        this.unitpay = unitpay;
        this.wsCallback = wsCallback;
        this.purchasesService = purchasesService;
    }
    async createPayment(dto) {
        const orderId = dto.order_id;
        const description = dto.description?.trim() ||
            `VornGames ${dto.game}: ${dto.amount} RUB`;
        const existing = await this.prisma.payment.findUnique({
            where: { orderId },
        });
        if (existing) {
            if (existing.status === client_1.PaymentStatus.pending && existing.paymentUrl) {
                return {
                    payment_url: existing.paymentUrl,
                    payment_id: existing.orderId,
                };
            }
            throw new common_1.ConflictException(`Payment with order_id ${orderId} already exists (${existing.status})`);
        }
        const payment = await this.prisma.payment.create({
            data: {
                orderId,
                type: client_1.PaymentType.donate,
                game: dto.game,
                steamId: dto.steamid,
                amount: dto.amount,
                description,
                status: client_1.PaymentStatus.pending,
            },
        });
        const { paymentId, redirectUrl } = await this.unitpay.initPayment({
            account: orderId,
            sum: dto.amount,
            desc: description,
        });
        await this.prisma.payment.update({
            where: { id: payment.id },
            data: { unitpayId: paymentId, paymentUrl: redirectUrl },
        });
        return {
            payment_url: redirectUrl,
            payment_id: orderId,
        };
    }
    async handleUnitpayWebhook(method, params, clientIp) {
        try {
            this.unitpay.assertHandlerIp(clientIp);
            this.unitpay.verifyHandlerSignature(method, params);
            switch (method) {
                case 'check':
                    return await this.handleCheck(params);
                case 'pay':
                    return await this.handlePay(params);
                case 'error':
                    return await this.handleError(params);
                default:
                    return this.unitpay.errorResponse(`Unsupported method: ${method}`);
            }
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Handler processing failed';
            this.logger.warn(`UnitPay handler error: ${message}`);
            return this.unitpay.errorResponse(message);
        }
    }
    async handleCheck(params) {
        const orderId = String(params.account ?? '');
        const orderSum = Number(params.orderSum ?? params.sum);
        const payment = await this.findPaymentOrError(orderId);
        if ('error' in payment) {
            return payment;
        }
        if (payment.status !== client_1.PaymentStatus.pending) {
            return this.unitpay.errorResponse('Order is not pending');
        }
        if (!Number.isFinite(orderSum) || orderSum !== payment.amount) {
            return this.unitpay.errorResponse('Order amount mismatch');
        }
        return this.unitpay.successResponse('OK');
    }
    async handlePay(params) {
        const orderId = String(params.account ?? '');
        const orderSum = Number(params.orderSum ?? params.sum);
        const unitpayId = params.unitpayId != null ? String(params.unitpayId) : undefined;
        const found = await this.findPaymentOrError(orderId);
        if ('error' in found) {
            return found;
        }
        if (!Number.isFinite(orderSum) || orderSum !== found.amount) {
            return this.unitpay.errorResponse('Order amount mismatch');
        }
        if (found.status === client_1.PaymentStatus.paid) {
            if (found.type === client_1.PaymentType.script) {
                await this.purchasesService.fulfillScriptPayment(found.id);
            }
            return this.unitpay.successResponse('Already paid');
        }
        if (found.status !== client_1.PaymentStatus.pending) {
            return this.unitpay.errorResponse('Order is not pending');
        }
        await this.prisma.payment.update({
            where: { id: found.id },
            data: {
                status: client_1.PaymentStatus.paid,
                paidAt: new Date(),
                unitpayId: unitpayId ?? found.unitpayId,
            },
        });
        if (found.type === client_1.PaymentType.script) {
            await this.purchasesService.fulfillScriptPayment(found.id);
        }
        else {
            await this.notifyWsOnce(found, 'success');
        }
        return this.unitpay.successResponse('Payment successful');
    }
    async handleError(params) {
        const orderId = String(params.account ?? '');
        const found = await this.findPaymentOrError(orderId);
        if ('error' in found) {
            return found;
        }
        if (found.status === client_1.PaymentStatus.paid) {
            return this.unitpay.successResponse('Already paid');
        }
        await this.prisma.payment.update({
            where: { id: found.id },
            data: { status: client_1.PaymentStatus.failed },
        });
        if (found.type === client_1.PaymentType.donate) {
            await this.notifyWsOnce(found, 'failed');
        }
        return this.unitpay.successResponse('Error recorded');
    }
    async findPaymentOrError(orderId) {
        if (!orderId) {
            return this.unitpay.errorResponse('Missing account (order_id)');
        }
        const payment = await this.prisma.payment.findUnique({
            where: { orderId },
        });
        if (!payment) {
            return this.unitpay.errorResponse('Order not found');
        }
        return payment;
    }
    async notifyWsOnce(payment, status) {
        if (payment.wsNotifiedAt || payment.type !== client_1.PaymentType.donate) {
            return;
        }
        await this.wsCallback.notify({
            order_id: payment.orderId,
            status,
            amount: payment.amount,
        });
        await this.prisma.payment.update({
            where: { id: payment.id },
            data: { wsNotifiedAt: new Date() },
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = PaymentsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => purchases_service_1.PurchasesService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        unitpay_service_1.UnitpayService,
        ws_callback_service_1.WsCallbackService,
        purchases_service_1.PurchasesService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map