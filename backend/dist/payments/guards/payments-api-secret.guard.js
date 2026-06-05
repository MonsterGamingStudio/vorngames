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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsApiSecretGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const payments_constants_1 = require("../payments.constants");
let PaymentsApiSecretGuard = class PaymentsApiSecretGuard {
    config;
    constructor(config) {
        this.config = config;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const expected = this.config.get('PAYMENTS_API_SECRET');
        if (!expected) {
            throw new common_1.UnauthorizedException('Payments API is not configured');
        }
        const headerSecret = req.header(payments_constants_1.PAYMENTS_API_SECRET_HEADER);
        const authHeader = req.header('authorization');
        const bearer = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : undefined;
        const provided = headerSecret ?? bearer;
        if (!provided || provided !== expected) {
            throw new common_1.UnauthorizedException('Invalid payments API secret');
        }
        return true;
    }
};
exports.PaymentsApiSecretGuard = PaymentsApiSecretGuard;
exports.PaymentsApiSecretGuard = PaymentsApiSecretGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PaymentsApiSecretGuard);
//# sourceMappingURL=payments-api-secret.guard.js.map