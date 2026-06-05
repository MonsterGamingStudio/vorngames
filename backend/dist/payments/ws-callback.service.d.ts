import { ConfigService } from '@nestjs/config';
export type WsPaymentStatus = 'success' | 'failed' | 'canceled';
export type WsCallbackPayload = {
    order_id: string;
    status: WsPaymentStatus;
    amount: number;
};
export declare class WsCallbackService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    notify(payload: WsCallbackPayload): Promise<void>;
}
