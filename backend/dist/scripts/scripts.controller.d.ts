import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { ScriptListQueryDto } from './dto/script.dto';
import { ScriptsService } from './scripts.service';
export declare class ScriptsController {
    private readonly scripts;
    constructor(scripts: ScriptsService);
    list(query: ScriptListQueryDto): Promise<{
        items: {
            discountPercent: number | null;
            badge: import("../generated/prisma/enums").ScriptBadge;
            coverUrl: string | null;
            publishedAt: Date | null;
            fileUpdatedAt: Date | null;
            tebexPackageId: number | null;
            tebexPayUrl: string | null;
            id: string;
            slug: string;
            title: string;
            shortDescription: string;
            gameCategory: import("../generated/prisma/enums").GameCategory;
            priceRub: number;
            priceUsd: number;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getRandom(count?: string): Promise<{
        media: {
            id: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
    }[]>;
    getPopular(limit?: string): Promise<{
        media: {
            id: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
    }[]>;
    getBySlug(slug: string, req: Request & {
        user?: User | null;
    }): Promise<{
        instructionHtml: string;
        media: {
            id: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        createdAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        isAuthenticated: boolean;
        isPurchased: boolean;
        requiresAuthToPurchase: boolean;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
    }>;
    recordView(id: string, req: Request & {
        user?: User | null;
    }): Promise<{
        ok: boolean;
        recorded: boolean;
    }>;
    recordClick(id: string, req: Request & {
        user?: User | null;
    }): Promise<{
        ok: boolean;
        recorded: boolean;
    }>;
}
