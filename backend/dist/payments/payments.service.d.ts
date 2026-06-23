import { PrismaService } from '../prisma/prisma.service';
import { PurchasesService } from '../purchases/purchases.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { UnitpayService, UnitPayHandlerParams } from './unitpay.service';
import { WsCallbackService } from './ws-callback.service';
export declare class PaymentsService {
    private readonly prisma;
    private readonly unitpay;
    private readonly wsCallback;
    private readonly purchasesService;
    private readonly logger;
    constructor(prisma: PrismaService, unitpay: UnitpayService, wsCallback: WsCallbackService, purchasesService: PurchasesService);
    createPayment(dto: CreatePaymentDto): Promise<CreatePaymentResponseDto>;
    handleUnitpayWebhook(method: string, params: UnitPayHandlerParams, clientIp: string | undefined): Promise<{
        result?: {
            message: string;
        };
        error?: {
            message: string;
        };
    }>;
    private handleCheck;
    private handlePay;
    private handleError;
    private findPaymentOrError;
    private notifyWsOnce;
}
