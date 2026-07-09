import {
  BadGatewayException,
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GameCategory } from '../generated/prisma/client';
import { TEBEX_HEADLESS_API_URL } from './tebex.constants';
import type { TebexHeadlessBasket } from './tebex.types';

@Injectable()
export class TebexHeadlessService {
  private readonly logger = new Logger(TebexHeadlessService.name);

  constructor(private readonly config: ConfigService) {}

  getPublicToken(gameCategory: GameCategory): string {
    const key =
      gameCategory === GameCategory.gmod
        ? 'TEBEX_GMOD_PUBLIC_TOKEN'
        : 'TEBEX_FIVEM_PUBLIC_TOKEN';

    const token = this.config.get<string>(key);
    if (!token) {
      throw new ServiceUnavailableException(
        `Tebex Headless API is not configured for ${gameCategory}`,
      );
    }

    return token;
  }

  async createBasket(
    publicToken: string,
    input: {
      completeUrl: string;
      cancelUrl: string;
      custom: Record<string, unknown>;
    },
  ): Promise<TebexHeadlessBasket> {
    const response = await this.request<{ data: TebexHeadlessBasket }>(
      `/accounts/${encodeURIComponent(publicToken)}/baskets`,
      { method: 'POST', body: {
        complete_url: input.completeUrl,
        cancel_url: input.cancelUrl,
        complete_auto_redirect: true,
        custom: input.custom,
      }},
    );

    return this.unwrapBasket(response);
  }

  async addPackage(
    basketIdent: string,
    input: {
      packageId: number;
      quantity?: number;
      targetUsernameId?: string;
    },
  ): Promise<TebexHeadlessBasket> {
    const body: Record<string, unknown> = {
      package_id: String(input.packageId),
      quantity: input.quantity ?? 1,
    };

    if (input.targetUsernameId) {
      body.target_username_id = input.targetUsernameId;
    }

    const response = await this.request<{ data: TebexHeadlessBasket }>(
      `/baskets/${encodeURIComponent(basketIdent)}/packages`,
      { method: 'POST', body },
    );

    return this.unwrapBasket(response);
  }

  private unwrapBasket(
    response: TebexHeadlessBasket | { data: TebexHeadlessBasket },
  ): TebexHeadlessBasket {
    if ('data' in response && response.data?.ident) {
      return response.data;
    }

    if ('ident' in response && response.ident) {
      return response;
    }

    throw new BadGatewayException('Tebex Headless API returned basket without ident');
  }

  private async request<T>(
    path: string,
    options: { method: string; body?: unknown },
  ): Promise<T> {
    let response: Response;
    try {
      response = await fetch(`${TEBEX_HEADLESS_API_URL}${path}`, {
        method: options.method,
        headers: { 'Content-Type': 'application/json' },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });
    } catch (err) {
      this.logger.error(`Tebex Headless ${options.method} ${path} failed`, err);
      throw new BadGatewayException('Tebex Headless API is unavailable');
    }

    const text = await response.text();
    let parsed: unknown;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      this.logger.warn(
        `Tebex Headless ${options.method} ${path} returned non-JSON: ${text.slice(0, 200)}`,
      );
      throw new BadGatewayException('Unexpected Tebex Headless API response');
    }

    if (!response.ok) {
      const detail = this.extractErrorDetail(parsed, text);
      this.logger.warn(
        `Tebex Headless ${options.method} ${path} error ${response.status}: ${detail}`,
      );
      throw new BadGatewayException(
        `Tebex Headless API rejected the request (${response.status})`,
      );
    }

    return parsed as T;
  }

  private extractErrorDetail(parsed: unknown, text: string): string {
    if (typeof parsed !== 'object' || parsed === null) {
      return text.slice(0, 200);
    }

    const record = parsed as Record<string, unknown>;
    if (typeof record.detail === 'string') {
      return record.detail;
    }
    if (typeof record.message === 'string') {
      return record.message;
    }

    return text.slice(0, 200);
  }
}
