import { GameCategory, Script, ScriptBadge, ScriptMediaType } from '../generated/prisma/client';
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
    constructor(prisma: PrismaService, storage: StorageService, notifications: NotificationsService);
    private scriptInclude;
    private mapMediaItem;
    private mapMediaItems;
    toListItem(script: Script & {
        media: {
            url: string;
            type: string;
        }[];
    }): {
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
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
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    };
    list(query: ScriptListQuery): Promise<{
        items: {
            id: string;
            slug: string;
            title: string;
            shortDescription: string;
            gameCategory: GameCategory;
            priceRub: number;
            priceUsd: number;
            discountPercent: number | null;
            badge: ScriptBadge;
            coverUrl: string | null;
            publishedAt: Date | null;
            fileUpdatedAt: Date | null;
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
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }[]>;
    getPopular(limit?: number): Promise<{
        media: {
            id: string;
            type: ScriptMediaType;
            sortOrder: number;
            url: string;
        }[];
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        coverUrl: string | null;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
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
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        coverUrl: string | null;
        media: {
            id: string;
            type: ScriptMediaType;
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
    };
    enrichDetailWithPurchase(detail: ReturnType<ScriptsService['toDetail']>, userId?: string): Promise<{
        id: string;
        slug: string;
        title: string;
        shortDescription: string;
        gameCategory: GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        coverUrl: string | null;
        media: {
            id: string;
            type: ScriptMediaType;
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    update(id: string, input: UpdateScriptInput): Promise<{
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    unpublish(id: string): Promise<{
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
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
    listAll(): Promise<({
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
        discountPercent: number | null;
        badge: ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    })[]>;
    getStats(scriptId: string, from?: Date, to?: Date): Promise<{
        views: number;
        clicks: number;
        purchases: number;
        comments: number;
    }>;
}
