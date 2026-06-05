import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiHeader,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { PaymentsApiSecretGuard } from './guards/payments-api-secret.guard';
import {
  PAYMENTS_API_SECRET_HEADER,
  SUPPORTED_GAMES,
} from './payments.constants';
import { PaymentsService } from './payments.service';
import type { UnitPayHandlerParams } from './unitpay.service';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create')
  @UseGuards(PaymentsApiSecretGuard)
  @ApiOperation({
    summary: 'Create payment and get UnitPay redirect URL',
    description:
      `Supported games: ${SUPPORTED_GAMES.join(', ')}. ` +
      'Requires shared secret in `X-Payments-Secret` header or `Authorization: Bearer <secret>`.',
  })
  @ApiHeader({
    name: PAYMENTS_API_SECRET_HEADER,
    required: true,
    description: 'Shared payments API secret (same as WS callback)',
  })
  @ApiResponse({ status: 200, type: CreatePaymentResponseDto })
  createPayment(
    @Body() dto: CreatePaymentDto,
  ): Promise<CreatePaymentResponseDto> {
    return this.paymentsService.createPayment(dto);
  }

  @Get('unitpay/handler')
  @ApiOperation({
    summary: 'UnitPay payment handler (configure this URL in UnitPay dashboard)',
    description:
      'UnitPay sends GET requests (check / pay / error). ' +
      'Public URL example: https://www.vorngames.com/api/payments/unitpay/handler',
  })
  async unitpayHandler(@Req() req: Request) {
    const method = String(req.query.method ?? '');
    const params = this.parseUnitpayParams(req.query);
    const clientIp = this.resolveClientIp(req);

    return this.paymentsService.handleUnitpayWebhook(
      method,
      params,
      clientIp,
    );
  }

  private parseUnitpayParams(
    query: Request['query'],
  ): UnitPayHandlerParams {
    const nested = query.params;
    if (nested && typeof nested === 'object' && !Array.isArray(nested)) {
      return nested as UnitPayHandlerParams;
    }

    const params: UnitPayHandlerParams = {};
    for (const [key, value] of Object.entries(query)) {
      const match = key.match(/^params\[(.+)\]$/);
      if (!match) continue;
      if (Array.isArray(value)) {
        params[match[1]] = value[0] as string;
      } else if (value != null) {
        params[match[1]] = value as string;
      }
    }

    return params;
  }

  private resolveClientIp(req: Request): string | undefined {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0]?.trim();
    }
    return req.ip;
  }
}
