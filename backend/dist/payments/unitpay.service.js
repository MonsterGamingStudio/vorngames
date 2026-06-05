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
var UnitpayService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitpayService = void 0;
const node_crypto_1 = require("node:crypto");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const payments_constants_1 = require("./payments.constants");
const UNITPAY_ALLOWED_IPS = [
    '31.186.100.49',
    '51.250.20.9',
    '52.29.152.23',
    '52.19.56.234',
    '127.0.0.1',
];
let UnitpayService = UnitpayService_1 = class UnitpayService {
    config;
    logger = new common_1.Logger(UnitpayService_1.name);
    constructor(config) {
        this.config = config;
    }
    async initPayment(input) {
        const projectId = this.config.getOrThrow('UNITPAY_PROJECT_ID');
        const secretKey = this.config.getOrThrow('UNITPAY_SECRET_KEY');
        const paymentType = this.config.get('UNITPAY_PAYMENT_TYPE') ?? 'card';
        const params = {
            paymentType,
            projectId,
            secretKey,
            sum: String(input.sum),
            account: input.account,
            desc: input.desc,
            currency: input.currency ?? 'RUB',
            locale: input.locale ?? 'ru',
        };
        const url = `${payments_constants_1.UNITPAY_API_URL}?${new URLSearchParams({
            method: 'initPayment',
            ...Object.fromEntries(Object.entries(params).map(([k, v]) => [`params[${k}]`, v])),
        }).toString()}`;
        let response;
        try {
            response = await fetch(url);
        }
        catch (err) {
            this.logger.error('UnitPay initPayment network error', err);
            throw new common_1.BadGatewayException('Payment provider is unavailable');
        }
        const body = (await response.json());
        if (body.error) {
            this.logger.warn(`UnitPay initPayment error: ${body.error.message}`);
            throw new common_1.BadGatewayException(body.error.message ?? 'Payment provider rejected the request');
        }
        const result = body.result;
        if (result?.type !== 'redirect' ||
            !result.redirectUrl ||
            result.paymentId == null) {
            throw new common_1.BadGatewayException('Unexpected payment provider response');
        }
        return {
            paymentId: String(result.paymentId),
            redirectUrl: result.redirectUrl,
        };
    }
    verifyHandlerSignature(method, params) {
        const secretKey = this.config.getOrThrow('UNITPAY_SECRET_KEY');
        const signature = params.signature;
        if (typeof signature !== 'string') {
            throw new common_1.UnauthorizedException('Missing UnitPay signature');
        }
        const expected = this.computeHandlerSignature(method, params, secretKey);
        if (signature !== expected) {
            throw new common_1.UnauthorizedException('Invalid UnitPay signature');
        }
    }
    assertHandlerIp(clientIp) {
        if (this.config.get('UNITPAY_SKIP_IP_CHECK') === 'true') {
            return;
        }
        if (!clientIp || !UNITPAY_ALLOWED_IPS.includes(clientIp)) {
            throw new common_1.UnauthorizedException('UnitPay IP is not allowed');
        }
    }
    computeHandlerSignature(method, params, secretKey) {
        const sorted = { ...params };
        delete sorted.signature;
        const keys = Object.keys(sorted).sort();
        const parts = keys.map((k) => String(sorted[k]));
        const hashStr = [method, ...parts, secretKey].join('{up}');
        return this.sha256(hashStr);
    }
    successResponse(message = 'OK') {
        return { result: { message } };
    }
    errorResponse(message) {
        return { error: { message } };
    }
    sha256(input) {
        return (0, node_crypto_1.createHash)('sha256').update(input).digest('hex');
    }
};
exports.UnitpayService = UnitpayService;
exports.UnitpayService = UnitpayService = UnitpayService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UnitpayService);
//# sourceMappingURL=unitpay.service.js.map