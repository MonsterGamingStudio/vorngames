import { GameCategory, ScriptBadge, ScriptMediaType } from '../generated/prisma/client';
import { ScriptsService } from './scripts.service';
declare class CreateScriptBodyDto {
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
}
declare class AddMediaBodyDto {
    type: ScriptMediaType;
    url: string;
    sortOrder?: number;
}
export declare class AdminScriptsController {
    private readonly scripts;
    constructor(scripts: ScriptsService);
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
    create(body: CreateScriptBodyDto): Promise<{
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
    update(id: string, body: CreateScriptBodyDto): Promise<{
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
    remove(id: string): Promise<{
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
    addMedia(id: string, body: AddMediaBodyDto): Promise<{
        id: string;
        createdAt: Date;
        scriptId: string;
        type: ScriptMediaType;
        url: string;
        sortOrder: number;
    }>;
    uploadImage(id: string, file: Express.Multer.File, sortOrder?: string): Promise<{
        id: string;
        createdAt: Date;
        scriptId: string;
        type: ScriptMediaType;
        url: string;
        sortOrder: number;
    }>;
    uploadVersion(id: string, file: Express.Multer.File, versionLabel: string): Promise<{
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
export {};
