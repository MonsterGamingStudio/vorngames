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
var WsCallbackService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsCallbackService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const payments_constants_1 = require("./payments.constants");
let WsCallbackService = WsCallbackService_1 = class WsCallbackService {
    config;
    logger = new common_1.Logger(WsCallbackService_1.name);
    constructor(config) {
        this.config = config;
    }
    async notify(payload) {
        const url = this.config.get('WS_CALLBACK_URL');
        const secret = this.config.get('PAYMENTS_API_SECRET');
        if (!url) {
            this.logger.warn(`WS_CALLBACK_URL is not set; skip callback for order ${payload.order_id}`);
            return;
        }
        if (!secret) {
            this.logger.warn(`PAYMENTS_API_SECRET is not set; skip WS callback for order ${payload.order_id}`);
            return;
        }
        let response;
        try {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    [payments_constants_1.PAYMENTS_API_SECRET_HEADER]: secret,
                },
                body: JSON.stringify(payload),
            });
        }
        catch (err) {
            this.logger.error(`WS callback network error for order ${payload.order_id}`, err);
            return;
        }
        if (!response.ok) {
            const text = await response.text().catch(() => '');
            this.logger.error(`WS callback failed for order ${payload.order_id}: ${response.status} ${text}`);
        }
    }
};
exports.WsCallbackService = WsCallbackService;
exports.WsCallbackService = WsCallbackService = WsCallbackService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WsCallbackService);
//# sourceMappingURL=ws-callback.service.js.map