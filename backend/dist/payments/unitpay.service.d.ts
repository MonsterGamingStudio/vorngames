import { ConfigService } from '@nestjs/config';
export type UnitPayHandlerParams = Record<string, string | number | undefined>;
export declare class UnitpayService {
    private readonly config;
    private readonly logger;
    constructor(config: ConfigService);
    initPayment(input: {
        account: string;
        sum: number;
        desc: string;
        currency?: string;
        locale?: string;
    }): Promise<{
        paymentId: string;
        redirectUrl: string;
    }>;
    verifyHandlerSignature(method: string, params: UnitPayHandlerParams): void;
    assertHandlerIp(clientIp: string | undefined): void;
    computeHandlerSignature(method: string, params: UnitPayHandlerParams, secretKey: string): string;
    successResponse(message?: string): {
        result: {
            message: string;
        };
    };
    errorResponse(message: string): {
        error: {
            message: string;
        };
    };
    private sha256;
}
