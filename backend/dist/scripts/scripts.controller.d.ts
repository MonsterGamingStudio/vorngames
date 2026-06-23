import type { Request } from 'express';
import { GameCategory, User } from '../generated/prisma/client';
import { ScriptsService } from './scripts.service';
export declare class ScriptsController {
    private readonly scripts;
    constructor(scripts: ScriptsService);
    list(search?: string, gameCategory?: GameCategory, sort?: 'price_asc' | 'price_desc' | 'popular', page?: string, limit?: string): Promise<{
        items: {
            id: string;
            slug: string;
            title: string;
            shortDescription: string;
            gameCategory: GameCategory;
            priceRub: number;
            priceUsd: number;
            discountPercent: number | null;
            badge: import("../generated/prisma/enums").ScriptBadge;
            coverUrl: string | null;
            publishedAt: Date | null;
            fileUpdatedAt: Date | null;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getRandom(count?: string): Promise<{
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }[]>;
    getPopular(limit?: string): Promise<{
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }[]>;
    getBySlug(slug: string, req: Request & {
        user?: User | null;
    }): Promise<{
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        instructionHtml: string;
        coverUrl: string | null;
        media: {
            id: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        createdAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        isAuthenticated: boolean;
        isPurchased: boolean;
        requiresAuthToPurchase: boolean;
    }>;
    recordView(id: string, req: Request & {
        user?: User | null;
    }): Promise<{
        ok: boolean;
    }>;
    recordClick(id: string, req: Request & {
        user?: User | null;
    }): Promise<{
        ok: boolean;
    }>;
}
