import { createHash } from 'node:crypto';
import {
  BadGatewayException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UNITPAY_API_URL } from './payments.constants';

type UnitPayInitResult = {
  type: string;
  paymentId?: number;
  redirectUrl?: string;
  message?: string;
};

type UnitPayApiResponse = {
  result?: UnitPayInitResult;
  error?: { message?: string; code?: number };
};

export type UnitPayHandlerParams = Record<string, string | number | undefined>;

const UNITPAY_ALLOWED_IPS = [
  '31.186.100.49',
  '51.250.20.9',
  '52.29.152.23',
  '52.19.56.234',
  '127.0.0.1',
];

@Injectable()
export class UnitpayService {
  private readonly logger = new Logger(UnitpayService.name);

  constructor(private readonly config: ConfigService) {}

  async initPayment(input: {
    account: string;
    sum: number;
    desc: string;
    currency?: string;
    locale?: string;
  }): Promise<{ paymentId: string; redirectUrl: string }> {
    const projectId = this.config.getOrThrow<string>('UNITPAY_PROJECT_ID');
    const secretKey = this.config.getOrThrow<string>('UNITPAY_SECRET_KEY');
    const paymentType =
      this.config.get<string>('UNITPAY_PAYMENT_TYPE') ?? 'card';

    const params: Record<string, string> = {
      paymentType,
      projectId,
      secretKey,
      sum: String(input.sum),
      account: input.account,
      desc: input.desc,
      currency: input.currency ?? 'RUB',
      locale: input.locale ?? 'ru',
    };

    const url = `${UNITPAY_API_URL}?${new URLSearchParams({
      method: 'initPayment',
      ...Object.fromEntries(
        Object.entries(params).map(([k, v]) => [`params[${k}]`, v]),
      ),
    }).toString()}`;

    let response: Response;
    try {
      response = await fetch(url);
    } catch (err) {
      this.logger.error('UnitPay initPayment network error', err);
      throw new BadGatewayException('Payment provider is unavailable');
    }

    const body = (await response.json()) as UnitPayApiResponse;

    if (body.error) {
      this.logger.warn(`UnitPay initPayment error: ${body.error.message}`);
      throw new BadGatewayException(
        body.error.message ?? 'Payment provider rejected the request',
      );
    }

    const result = body.result;
    if (
      result?.type !== 'redirect' ||
      !result.redirectUrl ||
      result.paymentId == null
    ) {
      throw new BadGatewayException('Unexpected payment provider response');
    }

    return {
      paymentId: String(result.paymentId),
      redirectUrl: result.redirectUrl,
    };
  }

  verifyHandlerSignature(
    method: string,
    params: UnitPayHandlerParams,
  ): void {
    const secretKey = this.config.getOrThrow<string>('UNITPAY_SECRET_KEY');
    const signature = params.signature;

    if (typeof signature !== 'string') {
      throw new UnauthorizedException('Missing UnitPay signature');
    }

    const expected = this.computeHandlerSignature(method, params, secretKey);
    if (signature !== expected) {
      throw new UnauthorizedException('Invalid UnitPay signature');
    }
  }

  assertHandlerIp(clientIp: string | undefined): void {
    if (this.config.get('UNITPAY_SKIP_IP_CHECK') === 'true') {
      return;
    }

    if (!clientIp || !UNITPAY_ALLOWED_IPS.includes(clientIp)) {
      throw new UnauthorizedException('UnitPay IP is not allowed');
    }
  }

  computeHandlerSignature(
    method: string,
    params: UnitPayHandlerParams,
    secretKey: string,
  ): string {
    const sorted = { ...params };
    delete sorted.signature;
    const keys = Object.keys(sorted).sort();
    const parts = keys.map((k) => String(sorted[k]));
    const hashStr = [method, ...parts, secretKey].join('{up}');

    return this.sha256(hashStr);
  }

  successResponse(message = 'OK'): { result: { message: string } } {
    return { result: { message } };
  }

  errorResponse(message: string): { error: { message: string } } {
    return { error: { message } };
  }

  private sha256(input: string): string {
    return createHash('sha256').update(input).digest('hex');
  }
}
