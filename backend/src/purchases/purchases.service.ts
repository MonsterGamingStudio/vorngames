import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';
import {
  Currency,
  PaymentStatus,
  PaymentType,
  Prisma,
  User,
} from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UnitpayService } from '../payments/unitpay.service';
import { NotificationsService } from '../notifications/notifications.service';
import { ScriptsService } from '../scripts/scripts.service';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class PurchasesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly unitpay: UnitpayService,
    private readonly notifications: NotificationsService,
    private readonly storage: StorageService,
    private readonly config: ConfigService,
    private readonly scripts: ScriptsService,
  ) {}

  private effectivePrice(
    script: {
      priceRub: Prisma.Decimal | number;
      priceUsd: Prisma.Decimal | number;
      discountPercent: number | null;
    },
    currency: Currency,
  ): number {
    const base = Number(
      currency === Currency.USD ? script.priceUsd : script.priceRub,
    );
    const discounted =
      script.discountPercent && script.discountPercent > 0
        ? base * (1 - script.discountPercent / 100)
        : base;
    return Math.round(discounted);
  }

  async createPurchase(user: User, scriptId: string, currency: Currency = Currency.RUB) {
    if (!user?.id) {
      throw new UnauthorizedException('Steam login required to purchase');
    }

    const script = await this.prisma.script.findFirst({
      where: { id: scriptId, isPublished: true, deletedAt: null },
    });

    if (!script) {
      throw new NotFoundException('Script not found');
    }

    const existing = await this.prisma.purchase.findUnique({
      where: { userId_scriptId: { userId: user.id, scriptId } },
    });

    if (existing) {
      throw new ConflictException('Script already purchased');
    }

    const pending = await this.prisma.payment.findFirst({
      where: {
        userId: user.id,
        scriptId,
        type: PaymentType.script,
        status: PaymentStatus.pending,
      },
    });

    if (pending?.paymentUrl) {
      return { payment_url: pending.paymentUrl, payment_id: pending.orderId };
    }

    const amount = this.effectivePrice(script, currency);
    const orderId = randomUUID();
    const description = `VornGames script: ${script.title}`;

    const payment = await this.prisma.payment.create({
      data: {
        orderId,
        type: PaymentType.script,
        game: '',
        userId: user.id,
        scriptId,
        steamId: user.steamId,
        amount,
        description,
        status: PaymentStatus.pending,
      },
    });

    const { paymentId, redirectUrl } = await this.unitpay.initPayment({
      account: orderId,
      sum: amount,
      desc: description,
    });

    await this.prisma.payment.update({
      where: { id: payment.id },
      data: { unitpayId: paymentId, paymentUrl: redirectUrl },
    });

    return { payment_url: redirectUrl, payment_id: orderId };
  }

  async fulfillScriptPayment(paymentId: string): Promise<void> {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: { script: true },
    });

    if (!payment || payment.type !== PaymentType.script || !payment.userId || !payment.scriptId) {
      return;
    }

    const existing = await this.prisma.purchase.findUnique({
      where: {
        userId_scriptId: {
          userId: payment.userId,
          scriptId: payment.scriptId,
        },
      },
    });

    if (existing) {
      return;
    }

    const purchase = await this.prisma.purchase.create({
      data: {
        userId: payment.userId,
        scriptId: payment.scriptId,
        paymentId: payment.id,
        pricePaid: payment.amount,
        currency: Currency.RUB,
      },
    });

    await this.notifications.create({
      userId: payment.userId,
      type: 'purchase_completed',
      title: 'Покупка завершена',
      body: `Скрипт «${payment.script?.title ?? ''}» успешно приобретён`,
      payload: { purchaseId: purchase.id, scriptId: payment.scriptId },
    });
  }

  async listUserPurchases(userId: string) {
    return this.fetchUserPurchases(userId);
  }

  async listPurchasesForUserAdmin(userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return this.fetchUserPurchases(userId, true);
  }

  private async fetchUserPurchases(userId: string, admin = false) {
    const purchases = await this.prisma.purchase.findMany({
      where: { userId },
      include: {
        script: {
          include: {
            media: { orderBy: { sortOrder: 'asc' }, take: 1 },
            versions: { where: { isCurrent: true }, take: 1 },
          },
        },
        lastDownloadedVersion: true,
      },
      orderBy: { purchasedAt: 'desc' },
    });

    return purchases.map((p) => {
      const currentVersion = p.script.versions[0] ?? null;
      const needsUpdate =
        currentVersion != null &&
        p.lastDownloadedVersionId !== currentVersion.id;

      return {
        id: p.id,
        purchasedAt: p.purchasedAt,
        pricePaid: p.pricePaid,
        currency: p.currency,
        needsUpdate,
        script: this.scripts.toListItem(p.script),
        ...(admin ? { grantedByAdmin: p.grantedByAdmin } : {}),
      };
    });
  }

  async download(purchaseId: string, userId: string, res: Response) {
    const purchase = await this.prisma.purchase.findFirst({
      where: { id: purchaseId, userId },
      include: {
        script: {
          include: { versions: { where: { isCurrent: true }, take: 1 } },
        },
      },
    });

    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }

    const version = purchase.script.versions[0];
    if (!version) {
      throw new NotFoundException('No file available for this script');
    }

    await this.prisma.purchase.update({
      where: { id: purchase.id },
      data: { lastDownloadedVersionId: version.id },
    });

    const driver = this.config.get<string>('STORAGE_DRIVER', 'local');
    if (driver === 'local') {
      const uploadDir = this.config.get<string>('UPLOAD_DIR', './uploads');
      const filePath = join(uploadDir, version.storageKey);
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${version.fileName}"`,
      );
      createReadStream(filePath).pipe(res);
      return;
    }

    const stream = await this.storage.stream(version.storageKey);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${version.fileName}"`,
    );
    stream.pipe(res);
  }

  async grantPurchase(userId: string, scriptId: string, currency: Currency = Currency.RUB) {
    const script = await this.prisma.script.findUnique({ where: { id: scriptId } });
    if (!script) {
      throw new NotFoundException('Script not found');
    }

    return this.prisma.purchase.upsert({
      where: { userId_scriptId: { userId, scriptId } },
      create: {
        userId,
        scriptId,
        pricePaid: 0,
        currency,
        grantedByAdmin: true,
      },
      update: {},
    });
  }

  async revokePurchase(purchaseId: string) {
    return this.prisma.purchase.delete({ where: { id: purchaseId } });
  }
}
