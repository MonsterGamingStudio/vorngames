import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { Payment, PaymentStatus } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreatePaymentResponseDto } from './dto/create-payment-response.dto';
import { UnitpayService, UnitPayHandlerParams } from './unitpay.service';
import { WsCallbackService, WsPaymentStatus } from './ws-callback.service';

@Injectable()
export class PaymentsService {
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly unitpay: UnitpayService,
    private readonly wsCallback: WsCallbackService,
  ) {}

  async createPayment(dto: CreatePaymentDto): Promise<CreatePaymentResponseDto> {
    const orderId = dto.order_id;
    const description =
      dto.description?.trim() ||
      `VornGames ${dto.game}: ${dto.amount} RUB`;

    const existing = await this.prisma.payment.findUnique({
      where: { orderId },
    });

    if (existing) {
      if (existing.status === PaymentStatus.pending && existing.paymentUrl) {
        return {
          payment_url: existing.paymentUrl,
          payment_id: existing.orderId,
        };
      }

      throw new ConflictException(
        `Payment with order_id ${orderId} already exists (${existing.status})`,
      );
    }

    const payment = await this.prisma.payment.create({
      data: {
        orderId,
        game: dto.game,
        steamId: dto.steamid,
        amount: dto.amount,
        description,
        status: PaymentStatus.pending,
      },
    });

    const { paymentId, redirectUrl } = await this.unitpay.initPayment({
      account: orderId,
      sum: dto.amount,
      desc: description,
    });

    await this.prisma.payment.update({
      where: { id: payment.id },
      data: { unitpayId: paymentId, paymentUrl: redirectUrl },
    });

    return {
      payment_url: redirectUrl,
      payment_id: orderId,
    };
  }

  async handleUnitpayWebhook(
    method: string,
    params: UnitPayHandlerParams,
    clientIp: string | undefined,
  ): Promise<{ result?: { message: string }; error?: { message: string } }> {
    try {
      this.unitpay.assertHandlerIp(clientIp);
      this.unitpay.verifyHandlerSignature(method, params);

      switch (method) {
        case 'check':
          return await this.handleCheck(params);
        case 'pay':
          return await this.handlePay(params);
        case 'error':
          return await this.handleError(params);
        default:
          return this.unitpay.errorResponse(`Unsupported method: ${method}`);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Handler processing failed';
      this.logger.warn(`UnitPay handler error: ${message}`);
      return this.unitpay.errorResponse(message);
    }
  }

  private async handleCheck(
    params: UnitPayHandlerParams,
  ): Promise<{ result: { message: string } } | { error: { message: string } }> {
    const orderId = String(params.account ?? '');
    const orderSum = Number(params.orderSum ?? params.sum);

    const payment = await this.findPaymentOrError(orderId);
    if ('error' in payment) {
      return payment;
    }

    if (payment.status !== PaymentStatus.pending) {
      return this.unitpay.errorResponse('Order is not pending');
    }

    if (!Number.isFinite(orderSum) || orderSum !== payment.amount) {
      return this.unitpay.errorResponse('Order amount mismatch');
    }

    return this.unitpay.successResponse('OK');
  }

  private async handlePay(
    params: UnitPayHandlerParams,
  ): Promise<{ result: { message: string } } | { error: { message: string } }> {
    const orderId = String(params.account ?? '');
    const orderSum = Number(params.orderSum ?? params.sum);
    const unitpayId = params.unitpayId != null ? String(params.unitpayId) : undefined;

    const found = await this.findPaymentOrError(orderId);
    if ('error' in found) {
      return found;
    }

    if (!Number.isFinite(orderSum) || orderSum !== found.amount) {
      return this.unitpay.errorResponse('Order amount mismatch');
    }

    if (found.status === PaymentStatus.paid) {
      return this.unitpay.successResponse('Already paid');
    }

    if (found.status !== PaymentStatus.pending) {
      return this.unitpay.errorResponse('Order is not pending');
    }

    await this.prisma.payment.update({
      where: { id: found.id },
      data: {
        status: PaymentStatus.paid,
        paidAt: new Date(),
        unitpayId: unitpayId ?? found.unitpayId,
      },
    });

    await this.notifyWsOnce(found, 'success');

    return this.unitpay.successResponse('Payment successful');
  }

  private async handleError(
    params: UnitPayHandlerParams,
  ): Promise<{ result: { message: string } } | { error: { message: string } }> {
    const orderId = String(params.account ?? '');
    const found = await this.findPaymentOrError(orderId);
    if ('error' in found) {
      return found;
    }

    if (found.status === PaymentStatus.paid) {
      return this.unitpay.successResponse('Already paid');
    }

    await this.prisma.payment.update({
      where: { id: found.id },
      data: { status: PaymentStatus.failed },
    });

    await this.notifyWsOnce(found, 'failed');

    return this.unitpay.successResponse('Error recorded');
  }

  private async findPaymentOrError(
    orderId: string,
  ): Promise<Payment | { error: { message: string } }> {
    if (!orderId) {
      return this.unitpay.errorResponse('Missing account (order_id)');
    }

    const payment = await this.prisma.payment.findUnique({
      where: { orderId },
    });

    if (!payment) {
      return this.unitpay.errorResponse('Order not found');
    }

    return payment;
  }

  private async notifyWsOnce(
    payment: Payment,
    status: WsPaymentStatus,
  ): Promise<void> {
    if (payment.wsNotifiedAt) {
      return;
    }

    await this.wsCallback.notify({
      order_id: payment.orderId,
      status,
      amount: payment.amount,
    });

    await this.prisma.payment.update({
      where: { id: payment.id },
      data: { wsNotifiedAt: new Date() },
    });
  }

}
