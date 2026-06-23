import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { Currency, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UnitpayService } from '../payments/unitpay.service';
import { NotificationsService } from '../notifications/notifications.service';
import { StorageService } from '../storage/storage.service';
export declare class PurchasesService {
    private readonly prisma;
    private readonly unitpay;
    private readonly notifications;
    private readonly storage;
    private readonly config;
    constructor(prisma: PrismaService, unitpay: UnitpayService, notifications: NotificationsService, storage: StorageService, config: ConfigService);
    private effectivePrice;
    createPurchase(user: User, scriptId: string, currency?: Currency): Promise<{
        payment_url: string;
        payment_id: string;
    }>;
    fulfillScriptPayment(paymentId: string): Promise<void>;
    listUserPurchases(userId: string): Promise<{
        id: string;
        purchasedAt: Date;
        pricePaid: number;
        currency: Currency;
        needsUpdate: boolean;
        script: {
            id: string;
            slug: string;
            title: string;
            shortDescription: string;
            gameCategory: import("../generated/prisma/enums").GameCategory;
            coverUrl: string | null;
            priceRub: number;
            priceUsd: number;
        };
    }[]>;
    download(purchaseId: string, userId: string, res: Response): Promise<void>;
    grantPurchase(userId: string, scriptId: string, currency?: Currency): Promise<{
        id: string;
        scriptId: string;
        userId: string;
        paymentId: string | null;
        pricePaid: number;
        currency: Currency;
        purchasedAt: Date;
        lastDownloadedVersionId: string | null;
        grantedByAdmin: boolean;
    }>;
    revokePurchase(purchaseId: string): Promise<{
        id: string;
        scriptId: string;
        userId: string;
        paymentId: string | null;
        pricePaid: number;
        currency: Currency;
        purchasedAt: Date;
        lastDownloadedVersionId: string | null;
        grantedByAdmin: boolean;
    }>;
}
