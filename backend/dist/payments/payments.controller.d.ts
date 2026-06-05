import type { Request } from 'express';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(dto: CreatePaymentDto): Promise<CreatePaymentResponseDto>;
    unitpayHandler(req: Request): Promise<{
        result?: {
            message: string;
        };
        error?: {
            message: string;
        };
    }>;
    private parseUnitpayParams;
    private resolveClientIp;
}
