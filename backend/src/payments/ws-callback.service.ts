import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PAYMENTS_API_SECRET_HEADER } from './payments.constants';

export type WsPaymentStatus = 'success' | 'failed' | 'canceled';

export type WsCallbackPayload = {
  order_id: string;
  status: WsPaymentStatus;
  amount: number;
};

@Injectable()
export class WsCallbackService {
  private readonly logger = new Logger(WsCallbackService.name);

  constructor(private readonly config: ConfigService) {}

  async notify(payload: WsCallbackPayload): Promise<void> {
    const url = this.config.get<string>('WS_CALLBACK_URL');
    const secret = this.config.get<string>('PAYMENTS_API_SECRET');

    if (!url) {
      this.logger.warn(
        `WS_CALLBACK_URL is not set; skip callback for order ${payload.order_id}`,
      );
      return;
    }

    if (!secret) {
      this.logger.warn(
        `PAYMENTS_API_SECRET is not set; skip WS callback for order ${payload.order_id}`,
      );
      return;
    }

    let response: Response;
    try {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          [PAYMENTS_API_SECRET_HEADER]: secret,
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      this.logger.error(
        `WS callback network error for order ${payload.order_id}`,
        err,
      );
      return;
    }

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      this.logger.error(
        `WS callback failed for order ${payload.order_id}: ${response.status} ${text}`,
      );
    }
  }
}
