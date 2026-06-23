import type { Request, Response } from 'express';
import { Currency, User } from '../generated/prisma/client';
import { PurchasesService } from './purchases.service';
export declare class PurchasesController {
    private readonly purchases;
    constructor(purchases: PurchasesService);
    purchase(id: string, req: Request & {
        user: User;
    }, currency?: string): Promise<{
        payment_url: string;
        payment_id: string;
    }>;
    list(req: Request & {
        user: User;
    }): Promise<{
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
    download(id: string, req: Request & {
        user: User;
    }, res: Response): Promise<void>;
}
