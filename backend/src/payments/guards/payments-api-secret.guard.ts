import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { PAYMENTS_API_SECRET_HEADER } from '../payments.constants';

@Injectable()
export class PaymentsApiSecretGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const expected = this.config.get<string>('PAYMENTS_API_SECRET');

    if (!expected) {
      throw new UnauthorizedException('Payments API is not configured');
    }

    const headerSecret = req.header(PAYMENTS_API_SECRET_HEADER);
    const authHeader = req.header('authorization');
    const bearer =
      authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : undefined;

    const provided = headerSecret ?? bearer;

    if (!provided || provided !== expected) {
      throw new UnauthorizedException('Invalid payments API secret');
    }

    return true;
  }
}
