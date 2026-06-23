"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto_1 = require("crypto");
const fs_1 = require("fs");
const path_1 = require("path");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const unitpay_service_1 = require("../payments/unitpay.service");
const notifications_service_1 = require("../notifications/notifications.service");
const storage_service_1 = require("../storage/storage.service");
let PurchasesService = class PurchasesService {
    prisma;
    unitpay;
    notifications;
    storage;
    config;
    constructor(prisma, unitpay, notifications, storage, config) {
        this.prisma = prisma;
        this.unitpay = unitpay;
        this.notifications = notifications;
        this.storage = storage;
        this.config = config;
    }
    effectivePrice(script, currency) {
        const base = currency === client_1.Currency.USD ? script.priceUsd : script.priceRub;
        if (script.discountPercent && script.discountPercent > 0) {
            return Math.round(base * (1 - script.discountPercent / 100));
        }
        return base;
    }
    async createPurchase(user, scriptId, currency = client_1.Currency.RUB) {
        if (!user?.id) {
            throw new common_1.UnauthorizedException('Steam login required to purchase');
        }
        const script = await this.prisma.script.findFirst({
            where: { id: scriptId, isPublished: true },
        });
        if (!script) {
            throw new common_1.NotFoundException('Script not found');
        }
        const existing = await this.prisma.purchase.findUnique({
            where: { userId_scriptId: { userId: user.id, scriptId } },
        });
        if (existing) {
            throw new common_1.ConflictException('Script already purchased');
        }
        const pending = await this.prisma.payment.findFirst({
            where: {
                userId: user.id,
                scriptId,
                type: client_1.PaymentType.script,
                status: client_1.PaymentStatus.pending,
            },
        });
        if (pending?.paymentUrl) {
            return { payment_url: pending.paymentUrl, payment_id: pending.orderId };
        }
        const amount = this.effectivePrice(script, currency);
        const orderId = (0, crypto_1.randomUUID)();
        const description = `VornGames script: ${script.title}`;
        const payment = await this.prisma.payment.create({
            data: {
                orderId,
                type: client_1.PaymentType.script,
                game: '',
                userId: user.id,
                scriptId,
                steamId: user.steamId,
                amount,
                description,
                status: client_1.PaymentStatus.pending,
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
    async fulfillScriptPayment(paymentId) {
        const payment = await this.prisma.payment.findUnique({
            where: { id: paymentId },
            include: { script: true },
        });
        if (!payment || payment.type !== client_1.PaymentType.script || !payment.userId || !payment.scriptId) {
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
                currency: client_1.Currency.RUB,
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
    async listUserPurchases(userId) {
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
            const needsUpdate = currentVersion != null &&
                p.lastDownloadedVersionId !== currentVersion.id;
            return {
                id: p.id,
                purchasedAt: p.purchasedAt,
                pricePaid: p.pricePaid,
                currency: p.currency,
                needsUpdate,
                script: {
                    id: p.script.id,
                    slug: p.script.slug,
                    title: p.script.title,
                    shortDescription: p.script.shortDescription,
                    gameCategory: p.script.gameCategory,
                    coverUrl: p.script.media[0]?.url
                        ? this.storage.getPublicUrl(p.script.media[0].url)
                        : null,
                    priceRub: p.script.priceRub,
                    priceUsd: p.script.priceUsd,
                },
            };
        });
    }
    async download(purchaseId, userId, res) {
        const purchase = await this.prisma.purchase.findFirst({
            where: { id: purchaseId, userId },
            include: {
                script: {
                    include: { versions: { where: { isCurrent: true }, take: 1 } },
                },
            },
        });
        if (!purchase) {
            throw new common_1.NotFoundException('Purchase not found');
        }
        const version = purchase.script.versions[0];
        if (!version) {
            throw new common_1.NotFoundException('No file available for this script');
        }
        await this.prisma.purchase.update({
            where: { id: purchase.id },
            data: { lastDownloadedVersionId: version.id },
        });
        const driver = this.config.get('STORAGE_DRIVER', 'local');
        if (driver === 'local') {
            const uploadDir = this.config.get('UPLOAD_DIR', './uploads');
            const filePath = (0, path_1.join)(uploadDir, version.storageKey);
            res.setHeader('Content-Disposition', `attachment; filename="${version.fileName}"`);
            (0, fs_1.createReadStream)(filePath).pipe(res);
            return;
        }
        const stream = await this.storage.stream(version.storageKey);
        res.setHeader('Content-Disposition', `attachment; filename="${version.fileName}"`);
        stream.pipe(res);
    }
    async grantPurchase(userId, scriptId, currency = client_1.Currency.RUB) {
        const script = await this.prisma.script.findUnique({ where: { id: scriptId } });
        if (!script) {
            throw new common_1.NotFoundException('Script not found');
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
    async revokePurchase(purchaseId) {
        return this.prisma.purchase.delete({ where: { id: purchaseId } });
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        unitpay_service_1.UnitpayService,
        notifications_service_1.NotificationsService,
        storage_service_1.StorageService,
        config_1.ConfigService])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map