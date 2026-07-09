import { GameCategory, Script, ScriptBadge, ScriptMediaType } from '../generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { NotificationsService } from '../notifications/notifications.service';
export type ScriptListQuery = {
    search?: string;
    gameCategory?: GameCategory;
    sort?: 'price_asc' | 'price_desc' | 'popular';
    page: number;
    limit: number;
};
export type CreateScriptInput = {
    title: string;
    slug?: string;
    shortDescription: string;
    gameCategory: GameCategory;
    priceRub: number;
    priceUsd: number;
    tebexPackageId?: number;
    discountPercent?: number;
    badge?: ScriptBadge;
    instructionHtml?: string;
    isPublished?: boolean;
    featuredOnHome?: boolean;
};
export type UpdateScriptInput = Partial<CreateScriptInput>;
export declare class ScriptsService {
    private readonly prisma;
    private readonly storage;
    private readonly notifications;
    private readonly config;
    constructor(prisma: PrismaService, storage: StorageService, notifications: NotificationsService, config: ConfigService);
    private scriptInclude;
    private readonly catalogWhere;
    private mapMediaItem;
    private mapMediaItems;
    toListItem(script: Script & {
        media: {
            url: string;
            type: string;
        }[];
    }): {
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    };
    toListItemWithMedia(script: Script & {
        media: Array<{
            id: string;
            type: ScriptMediaType;
            url: string;
            sortOrder: number;
        }>;
    }): {
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    };
    list(query: ScriptListQuery): Promise<{
        items: {
            discountPercent: number | null;
            badge: ScriptBadge;
            coverUrl: string | null;
            publishedAt: Date | null;
            fileUpdatedAt: Date | null;
            tebexPackageId: number | null;
            tebexPayUrl: string | null;
            id: string;
            slug: string;
            title: string;
            shortDescription: string;
            gameCategory: GameCategory;
            priceRub: number;
            priceUsd: number;
        }[];
        total: number;
        page: number;
        limit: number;
    }>;
    getRandom(count?: number): Promise<{
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }[]>;
    getPopular(limit?: number): Promise<{
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }[]>;
    toDetail(script: Script & {
        media: Array<{
            id: string;
            type: ScriptMediaType;
            url: string;
            sortOrder: number;
        }>;
        versions: Array<{
            id: string;
            versionLabel: string;
            releasedAt: Date;
        }>;
    }, userId?: string): {
        instructionHtml: string;
        media: {
            id: string;
            type: ScriptMediaType;
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
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    };
    toAdminItem(script: Script & {
        media: Array<{
            id: string;
            type: ScriptMediaType;
            url: string;
            sortOrder: number;
        }>;
        versions: Array<{
            id: string;
            versionLabel: string;
            releasedAt: Date;
        }>;
    }): {
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        createdAt: Date;
        updatedAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    };
    getTebexFields(script: Pick<Script, 'gameCategory' | 'tebexPackageId'>): {
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
    };
    enrichDetailWithPurchase(detail: ReturnType<ScriptsService['toDetail']>, userId?: string): Promise<{
        instructionHtml: string;
        media: {
            id: string;
            type: ScriptMediaType;
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
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }>;
    findBySlug(slug: string): Promise<{
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: ScriptMediaType;
            url: string;
            sortOrder: number;
        }[];
        versions: {
            id: string;
            createdAt: Date;
            scriptId: string;
            versionLabel: string;
            storageKey: string;
            fileName: string;
            fileSize: number;
            checksum: string | null;
            releasedAt: Date;
            isCurrent: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        tebexPackageId: number | null;
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        deletedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    findById(id: string): Promise<{
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: ScriptMediaType;
            url: string;
            sortOrder: number;
        }[];
        versions: {
            id: string;
            createdAt: Date;
            scriptId: string;
            versionLabel: string;
            storageKey: string;
            fileName: string;
            fileSize: number;
            checksum: string | null;
            releasedAt: Date;
            isCurrent: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        tebexPackageId: number | null;
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        deletedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    recordView(scriptId: string, userId: string | null, ipHash: string): Promise<{
        ok: boolean;
        recorded: boolean;
    }>;
    recordClick(scriptId: string, userId: string | null, ipHash: string): Promise<{
        ok: boolean;
        recorded: boolean;
    }>;
    private readonly analyticsDedupeMs;
    private recordAnalytics;
    create(input: CreateScriptInput): Promise<{
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        createdAt: Date;
        updatedAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }>;
    update(id: string, input: UpdateScriptInput): Promise<{
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        createdAt: Date;
        updatedAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }>;
    private buildTebexPayUrl;
    unpublish(id: string): Promise<{
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        createdAt: Date;
        updatedAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }>;
    addMedia(scriptId: string, data: {
        type: ScriptMediaType;
        url: string;
        sortOrder?: number;
    }): Promise<{
        id: string;
        type: ScriptMediaType;
        sortOrder: number;
        url: string;
    }>;
    uploadImage(scriptId: string, file: Express.Multer.File, sortOrder?: number): Promise<{
        id: string;
        type: ScriptMediaType;
        sortOrder: number;
        url: string;
    }>;
    addVersion(scriptId: string, file: Express.Multer.File, versionLabel: string): Promise<{
        id: string;
        createdAt: Date;
        scriptId: string;
        versionLabel: string;
        storageKey: string;
        fileName: string;
        fileSize: number;
        checksum: string | null;
        releasedAt: Date;
        isCurrent: boolean;
    }>;
    listMedia(scriptId: string): Promise<{
        id: string;
        type: ScriptMediaType;
        sortOrder: number;
        url: string;
    }[]>;
    removeMedia(scriptId: string, mediaId: string): Promise<{
        ok: boolean;
    }>;
    reorderMedia(scriptId: string, items: {
        id: string;
        sortOrder: number;
    }[]): Promise<{
        id: string;
        type: ScriptMediaType;
        sortOrder: number;
        url: string;
    }[]>;
    listAll(): Promise<{
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        createdAt: Date;
        updatedAt: Date;
        currentVersion: {
            id: string;
            versionLabel: string;
            releasedAt: Date;
        } | null;
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
        tebexPackageId: number | null;
        tebexPayUrl: string | null;
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
    }[]>;
    getStats(scriptId: string, from?: Date, to?: Date): Promise<{
        views: number;
        clicks: number;
        purchases: number;
        comments: number;
    }>;
}
