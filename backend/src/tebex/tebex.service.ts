import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash, createHmac, randomBytes } from 'crypto';
import {
  Currency,
  TebexLicenseStatus,
  TebexStore,
  User,
} from '../generated/prisma/client';
import { NotificationsService } from '../notifications/notifications.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  TEBEX_ALLOWED_IPS,
  TEBEX_WEBHOOK_TYPES,
} from './tebex.constants';
import { TebexHeadlessService } from './tebex-headless.service';
import {
  TebexPaymentSubject,
  TebexProduct,
  TebexStoreConfig,
  TebexWebhookEnvelope,
} from './tebex.types';

@Injectable()
export class TebexService {
  private readonly logger = new Logger(TebexService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly notifications: NotificationsService,
    private readonly headless: TebexHeadlessService,
  ) {}

  async handleWebhook(
    rawBody: Buffer,
    signature: string | undefined,
    clientIp: string | undefined,
  ): Promise<Record<string, unknown>> {
    this.assertAllowedIp(clientIp);

    const storeConfig = this.verifySignature(rawBody, signature);
    const payload = JSON.parse(rawBody.toString('utf-8')) as TebexWebhookEnvelope;

    if (payload.type === TEBEX_WEBHOOK_TYPES.validation) {
      return { id: payload.id };
    }

    if (payload.type === TEBEX_WEBHOOK_TYPES.paymentCompleted) {
      await this.processPaymentCompleted(
        payload.subject as TebexPaymentSubject,
        storeConfig,
      );
      return { ok: true };
    }

    if (payload.type === TEBEX_WEBHOOK_TYPES.paymentRefunded) {
      await this.processPaymentRefunded(payload.subject as TebexPaymentSubject);
      return { ok: true };
    }

    this.logger.log(`Ignored Tebex webhook type: ${payload.type}`);
    return { ok: true };
  }

  async createBuyBasket(
    user: User,
    scriptId: string,
    clientIp?: string,
  ): Promise<{ ident: string }> {
    const script = await this.loadBuyableScript(user, scriptId);
    const profileUrl = this.buildProfileUrl();
    const publicToken = this.headless.getPublicToken(script.gameCategory);

    const basket = await this.headless.createBasket(publicToken, {
      completeUrl: profileUrl,
      cancelUrl: profileUrl,
      custom: {
        steamId: user.steamId,
        scriptId: script.id,
        username: user.steamId,
        packageId: script.tebexPackageId,
        ip: clientIp,
      },
    });

    await this.headless.addPackage(basket.ident, {
      packageId: script.tebexPackageId!,
      quantity: 1,
      targetUsernameId: user.steamId,
    });

    return { ident: basket.ident };
  }

  private async loadBuyableScript(user: User, scriptId: string) {
    if (!user?.id) {
      throw new UnauthorizedException('Steam login required to purchase');
    }

    const script = await this.prisma.script.findFirst({
      where: { id: scriptId, isPublished: true, deletedAt: null },
    });

    if (!script) {
      throw new NotFoundException('Script not found');
    }

    if (!script.tebexPackageId) {
      throw new BadRequestException('Script is not available for Tebex checkout');
    }

    const existing = await this.prisma.purchase.findUnique({
      where: { userId_scriptId: { userId: user.id, scriptId } },
    });

    if (existing) {
      throw new ConflictException('Script already purchased');
    }

    return script;
  }

  async linkPendingLicenses(user: User): Promise<void> {
    const pending = await this.prisma.tebexLicense.findMany({
      where: {
        userId: null,
        customerSteamId: user.steamId,
        status: TebexLicenseStatus.active,
      },
    });

    for (const license of pending) {
      await this.grantAccess(license.id, user.id);
    }
  }

  async listLicenses(options: {
    search?: string;
    status?: TebexLicenseStatus;
    skip: number;
    take: number;
  }) {
    const where: {
      status?: TebexLicenseStatus;
      OR?: Array<{
        customerEmail?: { contains: string; mode: 'insensitive' };
        licenseKey?: { contains: string; mode: 'insensitive' };
        tebexTransactionId?: { contains: string; mode: 'insensitive' };
        packageName?: { contains: string; mode: 'insensitive' };
      }>;
    } = {};

    if (options.status) {
      where.status = options.status;
    }

    if (options.search) {
      where.OR = [
        { customerEmail: { contains: options.search, mode: 'insensitive' } },
        { licenseKey: { contains: options.search, mode: 'insensitive' } },
        {
          tebexTransactionId: { contains: options.search, mode: 'insensitive' },
        },
        { packageName: { contains: options.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.tebexLicense.findMany({
        where,
        orderBy: { purchasedAt: 'desc' },
        skip: options.skip,
        take: options.take,
        include: {
          script: { select: { id: true, title: true, slug: true } },
          user: { select: { id: true, username: true, steamId: true } },
        },
      }),
      this.prisma.tebexLicense.count({ where }),
    ]);

    return { items, total };
  }

  async listPackageMappings(options: {
    store?: TebexStore;
    skip: number;
    take: number;
  }) {
    const where = options.store ? { store: options.store } : {};

    const [items, total] = await Promise.all([
      this.prisma.tebexPackageMapping.findMany({
        where,
        orderBy: [{ store: 'asc' }, { packageId: 'asc' }],
        skip: options.skip,
        take: options.take,
        include: {
          script: { select: { id: true, title: true, slug: true } },
        },
      }),
      this.prisma.tebexPackageMapping.count({ where }),
    ]);

    return { items, total };
  }

  async createPackageMapping(data: {
    store: TebexStore;
    packageId: number;
    packageName?: string;
    scriptId: string;
  }) {
    const script = await this.prisma.script.findUnique({
      where: { id: data.scriptId },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }

    const existing = await this.prisma.tebexPackageMapping.findUnique({
      where: {
        store_packageId: { store: data.store, packageId: data.packageId },
      },
    });
    if (existing) {
      throw new ConflictException(
        `Package ${data.packageId} is already mapped for store ${data.store}`,
      );
    }

    return this.prisma.tebexPackageMapping.create({
      data: {
        store: data.store,
        packageId: data.packageId,
        packageName: data.packageName ?? '',
        scriptId: data.scriptId,
      },
      include: {
        script: { select: { id: true, title: true, slug: true } },
      },
    });
  }

  async updatePackageMapping(
    id: string,
    data: {
      packageId?: number;
      packageName?: string;
      scriptId?: string;
    },
  ) {
    const mapping = await this.prisma.tebexPackageMapping.findUnique({
      where: { id },
    });
    if (!mapping) {
      throw new NotFoundException('Tebex package mapping not found');
    }

    if (data.scriptId) {
      const script = await this.prisma.script.findUnique({
        where: { id: data.scriptId },
      });
      if (!script) {
        throw new NotFoundException('Script not found');
      }
    }

    if (data.packageId != null && data.packageId !== mapping.packageId) {
      const duplicate = await this.prisma.tebexPackageMapping.findUnique({
        where: {
          store_packageId: {
            store: mapping.store,
            packageId: data.packageId,
          },
        },
      });
      if (duplicate) {
        throw new ConflictException(
          `Package ${data.packageId} is already mapped for store ${mapping.store}`,
        );
      }
    }

    return this.prisma.tebexPackageMapping.update({
      where: { id },
      data: {
        packageId: data.packageId,
        packageName: data.packageName,
        scriptId: data.scriptId,
      },
      include: {
        script: { select: { id: true, title: true, slug: true } },
      },
    });
  }

  async deletePackageMapping(id: string) {
    const mapping = await this.prisma.tebexPackageMapping.findUnique({
      where: { id },
    });
    if (!mapping) {
      throw new NotFoundException('Tebex package mapping not found');
    }

    await this.prisma.tebexPackageMapping.delete({ where: { id } });
    return { ok: true };
  }

  async setLicenseActive(licenseId: string, active: boolean) {
    const license = await this.prisma.tebexLicense.findUnique({
      where: { id: licenseId },
    });

    if (!license) {
      throw new NotFoundException('Tebex license not found');
    }

    if (active) {
      const updated = await this.prisma.tebexLicense.update({
        where: { id: licenseId },
        data: { status: TebexLicenseStatus.active },
      });

      if (updated.userId) {
        await this.grantAccess(updated.id, updated.userId);
      }

      return updated;
    }

    await this.revokeAccess(licenseId);
    return this.prisma.tebexLicense.findUniqueOrThrow({
      where: { id: licenseId },
    });
  }

  private async processPaymentCompleted(
    subject: TebexPaymentSubject,
    storeConfig: TebexStoreConfig,
  ): Promise<void> {
    if (!subject?.transaction_id) {
      throw new BadRequestException('Missing transaction_id in Tebex webhook');
    }

    const existing = await this.prisma.tebexLicense.findFirst({
      where: {
        OR: [
          { tebexTransactionId: subject.transaction_id },
          {
            tebexTransactionId: { startsWith: `${subject.transaction_id}-` },
          },
        ],
      },
    });

    if (existing) {
      this.logger.log(
        `Duplicate Tebex webhook ignored: ${subject.transaction_id}`,
      );
      return;
    }

    const products = subject.products ?? [];
    if (products.length === 0) {
      this.logger.warn(
        `Tebex payment ${subject.transaction_id} has no products`,
      );
      return;
    }

    for (const product of products) {
      await this.createLicenseForProduct(subject, product, storeConfig);
    }
  }

  private async createLicenseForProduct(
    subject: TebexPaymentSubject,
    product: TebexProduct,
    storeConfig: TebexStoreConfig,
  ): Promise<void> {
    const scriptId = await this.resolveScriptId(
      storeConfig.store,
      product.id,
      subject,
      product,
    );

    if (!scriptId) {
      this.logger.error(
        `No script mapping for Tebex package ${product.id} (${product.name}) in store ${storeConfig.store}`,
      );
      return;
    }

    const customerSteamId = this.extractSteamId(subject, product);
    const user = customerSteamId
      ? await this.prisma.user.findUnique({
          where: { steamId: customerSteamId },
        })
      : null;

    const price = product.paid_price ?? product.base_price ?? subject.price_paid ?? subject.price;
    const tebexTransactionId = `${subject.transaction_id}-${product.id}`;

    const duplicate = await this.prisma.tebexLicense.findUnique({
      where: { tebexTransactionId },
    });
    if (duplicate) {
      return;
    }

    const license = await this.prisma.tebexLicense.create({
      data: {
        tebexTransactionId,
        store: storeConfig.store,
        packageId: product.id,
        packageName: product.name,
        scriptId,
        customerEmail: subject.customer?.email ?? '',
        customerUsername:
          product.username?.username ??
          subject.customer?.username?.username ??
          null,
        customerSteamId,
        priceAmount: price?.amount ?? 0,
        priceCurrency: price?.currency ?? 'USD',
        licenseKey: this.generateLicenseKey(),
        status: TebexLicenseStatus.active,
        userId: user?.id ?? null,
        purchasedAt: new Date(subject.created_at),
      },
    });

    if (user) {
      await this.grantAccess(license.id, user.id);
    } else {
      this.logger.warn(
        `Tebex license ${license.licenseKey} created without linked user (steamId=${customerSteamId ?? 'unknown'})`,
      );
    }
  }

  private async processPaymentRefunded(
    subject: TebexPaymentSubject,
  ): Promise<void> {
    const licenses = await this.prisma.tebexLicense.findMany({
      where: {
        tebexTransactionId: {
          startsWith: subject.transaction_id,
        },
      },
    });

    for (const license of licenses) {
      await this.revokeAccess(license.id);
    }
  }

  private async grantAccess(licenseId: string, userId: string): Promise<void> {
    const license = await this.prisma.tebexLicense.findUnique({
      where: { id: licenseId },
      include: { script: true },
    });

    if (!license || license.status !== TebexLicenseStatus.active) {
      return;
    }

    const currency =
      license.priceCurrency === 'RUB' ? Currency.RUB : Currency.USD;

    const purchase = await this.prisma.purchase.upsert({
      where: {
        userId_scriptId: { userId, scriptId: license.scriptId },
      },
      create: {
        userId,
        scriptId: license.scriptId,
        pricePaid: Math.round(Number(license.priceAmount)),
        currency,
      },
      update: {},
    });

    await this.prisma.tebexLicense.update({
      where: { id: licenseId },
      data: { userId, purchaseId: purchase.id },
    });

    const alreadyLinked = license.purchaseId === purchase.id;
    if (!alreadyLinked) {
      await this.notifications.create({
        userId,
        type: 'purchase_completed',
        title: 'Покупка завершена',
        body: `Скрипт «${license.script.title}» успешно приобретён через Tebex`,
        payload: {
          purchaseId: purchase.id,
          scriptId: license.scriptId,
          tebexLicenseId: license.id,
          licenseKey: license.licenseKey,
        },
      });
    }
  }

  private async revokeAccess(licenseId: string): Promise<void> {
    const license = await this.prisma.tebexLicense.findUnique({
      where: { id: licenseId },
    });

    if (!license) {
      return;
    }

    if (license.purchaseId) {
      await this.prisma.purchase
        .delete({ where: { id: license.purchaseId } })
        .catch(() => undefined);
    }

    await this.prisma.tebexLicense.update({
      where: { id: licenseId },
      data: {
        status: TebexLicenseStatus.revoked,
        purchaseId: null,
      },
    });
  }

  private verifySignature(
    rawBody: Buffer,
    signature: string | undefined,
  ): TebexStoreConfig {
    if (!signature) {
      throw new UnauthorizedException('Missing X-Signature header');
    }

    for (const storeConfig of this.getStoreConfigs()) {
      const expected = this.buildSignature(rawBody, storeConfig.secret);
      if (expected === signature) {
        return storeConfig;
      }
    }

    throw new UnauthorizedException('Invalid Tebex webhook signature');
  }

  private buildSignature(rawBody: Buffer, secret: string): string {
    const bodyHash = createHash('sha256')
      .update(rawBody.toString('utf-8'))
      .digest('hex');
    return createHmac('sha256', secret).update(bodyHash).digest('hex');
  }

  private getStoreConfigs(): TebexStoreConfig[] {
    const configs: TebexStoreConfig[] = [];

    const gmodSecret = this.config.get<string>('TEBEX_GMOD_WEBHOOK_SECRET');
    if (gmodSecret) {
      configs.push({
        store: TebexStore.gmod,
        secret: gmodSecret,
      });
    }

    const fivemSecret = this.config.get<string>('TEBEX_FIVEM_WEBHOOK_SECRET');
    if (fivemSecret) {
      configs.push({
        store: TebexStore.fivem,
        secret: fivemSecret,
      });
    }

    if (configs.length === 0) {
      throw new UnauthorizedException('Tebex webhook secrets are not configured');
    }

    return configs;
  }

  private async resolveScriptId(
    store: TebexStore,
    packageId: number,
    subject?: TebexPaymentSubject,
    product?: TebexProduct,
  ): Promise<string | null> {
    const mapping = await this.prisma.tebexPackageMapping.findUnique({
      where: { store_packageId: { store, packageId } },
    });

    if (mapping?.scriptId) {
      return mapping.scriptId;
    }

    const scriptIdFromCustom = this.extractScriptIdFromCustom(subject, product);
    if (!scriptIdFromCustom) {
      return null;
    }

    const script = await this.prisma.script.findFirst({
      where: { id: scriptIdFromCustom, deletedAt: null },
    });

    return script?.id ?? null;
  }

  private extractScriptIdFromCustom(
    subject?: TebexPaymentSubject,
    product?: TebexProduct,
  ): string | null {
    const candidates = [
      product?.custom?.scriptId,
      subject?.custom?.scriptId,
    ];

    for (const value of candidates) {
      if (typeof value === 'string' && value.length > 0) {
        return value;
      }
    }

    return null;
  }

  private buildProfileUrl(): string {
    const base = (this.config.get<string>('FRONTEND_URL') ?? '').replace(
      /\/+$/,
      '',
    );
    return `${base}/profile/me`;
  }

  private extractSteamId(
    subject: TebexPaymentSubject,
    product: TebexProduct,
  ): string | null {
    const candidates = [
      product.username?.id,
      subject.customer?.username?.id,
      ...((product.variables ?? []).map((v) =>
        /steam/i.test(v.identifier) ? v.option : null,
      )),
    ];

    for (const value of candidates) {
      const steamId = this.normalizeSteamId(value);
      if (steamId) {
        return steamId;
      }
    }

    return null;
  }

  private normalizeSteamId(value: string | undefined | null): string | null {
    if (!value) {
      return null;
    }

    const trimmed = value.trim();
    if (/^7656119\d{10}$/.test(trimmed)) {
      return trimmed;
    }

    return null;
  }

  private generateLicenseKey(): string {
    const segment = () => randomBytes(2).toString('hex').toUpperCase();
    return `VG-${segment()}-${segment()}-${segment()}-${segment()}`;
  }

  private assertAllowedIp(clientIp: string | undefined): void {
    if (this.config.get<string>('TEBEX_SKIP_IP_CHECK', 'false') === 'true') {
      return;
    }

    if (!clientIp) {
      throw new UnauthorizedException('Unable to verify Tebex webhook IP');
    }

    const normalized = clientIp.replace(/^::ffff:/, '');
    if (!TEBEX_ALLOWED_IPS.includes(normalized as (typeof TEBEX_ALLOWED_IPS)[number])) {
      throw new UnauthorizedException('Tebex webhook IP is not allowed');
    }
  }
}
