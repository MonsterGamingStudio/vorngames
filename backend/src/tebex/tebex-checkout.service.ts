import {
  BadGatewayException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GameCategory } from '../generated/prisma/client';
import { TEBEX_CHECKOUT_API_URL } from './tebex.constants';
import type {
  TebexCheckoutBasket,
  TebexCheckoutCredentials,
} from './tebex.types';

@Injectable()
export class TebexCheckoutService {
  private readonly logger = new Logger(TebexCheckoutService.name);

  constructor(private readonly config: ConfigService) {}

  getCredentials(gameCategory: GameCategory): TebexCheckoutCredentials {
    const prefix =
      gameCategory === GameCategory.gmod ? 'TEBEX_GMOD' : 'TEBEX_FIVEM';

    const projectId = this.config.get<string>(`${prefix}_PROJECT_ID`);
    const privateKey = this.config.get<string>(`${prefix}_PRIVATE_KEY`);

    if (!projectId || !privateKey) {
      throw new ServiceUnavailableException(
        `Tebex Checkout API is not configured for ${gameCategory}`,
      );
    }

    return { projectId, privateKey };
  }

  async createBasket(
    credentials: TebexCheckoutCredentials,
    input: {
      returnUrl: string;
      completeUrl: string;
      email: string;
      custom: Record<string, unknown>;
      ip?: string;
    },
  ): Promise<TebexCheckoutBasket> {
    return this.request<TebexCheckoutBasket>(credentials, '/baskets', {
      method: 'POST',
      body: {
        return_url: input.returnUrl,
        complete_url: input.completeUrl,
        complete_auto_redirect: true,
        email: input.email,
        custom: input.custom,
        ip: input.ip,
      },
    });
  }

  async addPackage(
    credentials: TebexCheckoutCredentials,
    ident: string,
    input: {
      name: string;
      price: number;
      qty?: number;
      custom?: Record<string, unknown>;
    },
  ): Promise<TebexCheckoutBasket> {
    return this.request<TebexCheckoutBasket>(
      credentials,
      `/baskets/${encodeURIComponent(ident)}/packages`,
      {
        method: 'POST',
        body: {
          package: {
            name: input.name,
            price: input.price,
            type: 'single',
            qty: input.qty ?? 1,
            custom: input.custom,
          },
          qty: input.qty ?? 1,
          type: 'single',
        },
      },
    );
  }

  private async request<T>(
    credentials: TebexCheckoutCredentials,
    path: string,
    options: { method: string; body?: unknown },
  ): Promise<T> {
    const auth = Buffer.from(
      `${credentials.projectId}:${credentials.privateKey}`,
    ).toString('base64');

    let response: Response;
    try {
      response = await fetch(`${TEBEX_CHECKOUT_API_URL}${path}`, {
        method: options.method,
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/json',
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });
    } catch (err) {
      this.logger.error(`Tebex Checkout ${options.method} ${path} failed`, err);
      throw new BadGatewayException('Tebex Checkout API is unavailable');
    }

    const text = await response.text();
    let parsed: unknown;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      this.logger.warn(
        `Tebex Checkout ${options.method} ${path} returned non-JSON: ${text.slice(0, 200)}`,
      );
      throw new BadGatewayException('Unexpected Tebex Checkout API response');
    }

    if (!response.ok) {
      const detail =
        typeof parsed === 'object' &&
        parsed !== null &&
        'detail' in parsed &&
        typeof (parsed as { detail: unknown }).detail === 'string'
          ? (parsed as { detail: string }).detail
          : text.slice(0, 200);

      this.logger.warn(
        `Tebex Checkout ${options.method} ${path} error ${response.status}: ${detail}`,
      );
      throw new BadGatewayException(
        `Tebex Checkout API rejected the request (${response.status})`,
      );
    }

    return parsed as T;
  }
}
