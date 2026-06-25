import { AddScriptMediaDto, CreateScriptDto, ReorderScriptMediaDto, UploadImageBodyDto, UploadVersionBodyDto } from './dto/script.dto';
import { ScriptsService } from './scripts.service';
export declare class AdminScriptsController {
    private readonly scripts;
    constructor(scripts: ScriptsService);
    listAll(): Promise<({
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
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
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    })[]>;
    create(body: CreateScriptDto): Promise<{
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
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
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    update(id: string, body: CreateScriptDto): Promise<{
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
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
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
    }>;
    remove(id: string): Promise<{
        media: {
            id: string;
            createdAt: Date;
            scriptId: string;
            type: import("../generated/prisma/enums").ScriptMediaType;
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
        gameCategory: import("../generated/prisma/enums").GameCategory;
        priceRub: number;
        priceUsd: number;
        discountPercent: number | null;
        badge: import("../generated/prisma/enums").ScriptBadge;
        instructionHtml: string;
        isPublished: boolean;
        featuredOnHome: boolean;
        publishedAt: Date | null;
        fileUpdatedAt: Date | null;
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
