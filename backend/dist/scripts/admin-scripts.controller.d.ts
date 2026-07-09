import { AddScriptMediaDto, CreateScriptDto, ReorderScriptMediaDto, UploadImageBodyDto, UploadVersionBodyDto } from './dto/script.dto';
import { ScriptsService } from './scripts.service';
export declare class AdminScriptsController {
    private readonly scripts;
    constructor(scripts: ScriptsService);
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
    create(body: CreateScriptDto): Promise<{
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
    }>;
    update(id: string, body: CreateScriptDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    addMedia(id: string, body: AddScriptMediaDto): Promise<{
        id: string;
        type: import("../generated/prisma/enums").ScriptMediaType;
        sortOrder: number;
        url: string;
    }>;
    uploadImage(id: string, file: Express.Multer.File, body: UploadImageBodyDto): Promise<{
        id: string;
        type: import("../generated/prisma/enums").ScriptMediaType;
        sortOrder: number;
        url: string;
    }>;
    listMedia(id: string): Promise<{
        id: string;
        type: import("../generated/prisma/enums").ScriptMediaType;
        sortOrder: number;
        url: string;
    }[]>;
    reorderMedia(id: string, body: ReorderScriptMediaDto): Promise<{
        id: string;
        type: import("../generated/prisma/enums").ScriptMediaType;
        sortOrder: number;
        url: string;
    }[]>;
    removeMedia(id: string, mediaId: string): Promise<{
        ok: boolean;
    }>;
    uploadVersion(id: string, file: Express.Multer.File, body: UploadVersionBodyDto): Promise<{
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
    stats(id: string, from?: string, to?: string): Promise<{
        views: number;
        clicks: number;
        purchases: number;
        comments: number;
    }>;
}
