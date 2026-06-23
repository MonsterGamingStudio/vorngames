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
exports.ScriptsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const storage_service_1 = require("../storage/storage.service");
const utils_1 = require("../common/utils");
const notifications_service_1 = require("../notifications/notifications.service");
let ScriptsService = class ScriptsService {
    prisma;
    storage;
    notifications;
    constructor(prisma, storage, notifications) {
        this.prisma = prisma;
        this.storage = storage;
        this.notifications = notifications;
    }
    scriptInclude = {
        media: { orderBy: { sortOrder: 'asc' } },
        versions: { where: { isCurrent: true }, take: 1 },
    };
    toListItem(script) {
        const coverRaw = script.media.find((m) => m.type === client_1.ScriptMediaType.image)?.url ?? null;
        return {
            id: script.id,
            slug: script.slug,
            title: script.title,
            shortDescription: script.shortDescription,
            gameCategory: script.gameCategory,
            priceRub: script.priceRub,
            priceUsd: script.priceUsd,
            discountPercent: script.discountPercent,
            badge: script.badge,
            coverUrl: coverRaw ? this.storage.getPublicUrl(coverRaw) : null,
            publishedAt: script.publishedAt,
            fileUpdatedAt: script.fileUpdatedAt,
        };
    }
    async list(query) {
        const where = { isPublished: true };
        if (query.search) {
            where.title = { contains: query.search, mode: 'insensitive' };
        }
        if (query.gameCategory) {
            where.gameCategory = query.gameCategory;
        }
        const skip = (query.page - 1) * query.limit;
        if (query.sort === 'popular') {
            const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
            const popular = await this.prisma.scriptView.groupBy({
                by: ['scriptId'],
                where: { createdAt: { gte: since }, script: where },
                _count: { scriptId: true },
                orderBy: { _count: { scriptId: 'desc' } },
                skip,
                take: query.limit,
            });
            const ids = popular.map((p) => p.scriptId);
            if (ids.length === 0) {
                return { items: [], total: 0, page: query.page, limit: query.limit };
            }
            const scripts = await this.prisma.script.findMany({
                where: { id: { in: ids }, isPublished: true },
                include: this.scriptInclude,
            });
            const ordered = ids
                .map((id) => scripts.find((s) => s.id === id))
                .filter(Boolean);
            return {
                items: ordered.map((s) => this.toListItem(s)),
                total: await this.prisma.script.count({ where }),
                page: query.page,
                limit: query.limit,
            };
        }
        const orderBy = query.sort === 'price_desc'
            ? { priceRub: 'desc' }
            : query.sort === 'price_asc'
                ? { priceRub: 'asc' }
                : { createdAt: 'desc' };
        const [items, total] = await Promise.all([
            this.prisma.script.findMany({
                where,
                orderBy,
                skip,
                take: query.limit,
                include: this.scriptInclude,
            }),
            this.prisma.script.count({ where }),
        ]);
        return {
            items: items.map((s) => this.toListItem(s)),
            total,
            page: query.page,
            limit: query.limit,
        };
    }
    async getRandom(count = 4) {
        const published = await this.prisma.script.findMany({
            where: { isPublished: true },
            select: { id: true },
        });
        const shuffled = published.sort(() => Math.random() - 0.5).slice(0, count);
        const scripts = await this.prisma.script.findMany({
            where: { id: { in: shuffled.map((s) => s.id) } },
            include: this.scriptInclude,
        });
        return scripts.map((s) => this.toListItem(s));
    }
    async getPopular(limit = 8) {
        const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const popular = await this.prisma.scriptView.groupBy({
            by: ['scriptId'],
            where: { createdAt: { gte: since } },
            _count: { scriptId: true },
            orderBy: { _count: { scriptId: 'desc' } },
            take: limit,
        });
        const ids = popular.map((p) => p.scriptId);
        if (!ids.length) {
            return [];
        }
        const scripts = await this.prisma.script.findMany({
            where: { id: { in: ids }, isPublished: true },
            include: this.scriptInclude,
        });
        return ids
            .map((id) => scripts.find((s) => s.id === id))
            .filter(Boolean)
            .map((s) => this.toListItem(s));
    }
    toDetail(script, userId) {
        const coverRaw = script.media.find((m) => m.type === client_1.ScriptMediaType.image)?.url ?? null;
        return {
            id: script.id,
            slug: script.slug,
            title: script.title,
            shortDescription: script.shortDescription,
            gameCategory: script.gameCategory,
            priceRub: script.priceRub,
            priceUsd: script.priceUsd,
            discountPercent: script.discountPercent,
            badge: script.badge,
            instructionHtml: script.instructionHtml,
            coverUrl: coverRaw ? this.storage.getPublicUrl(coverRaw) : null,
            media: script.media.map((m) => ({
                id: m.id,
                type: m.type,
                sortOrder: m.sortOrder,
                url: m.type === client_1.ScriptMediaType.youtube
                    ? m.url
                    : this.storage.getPublicUrl(m.url),
            })),
            publishedAt: script.publishedAt,
            fileUpdatedAt: script.fileUpdatedAt,
            createdAt: script.createdAt,
            currentVersion: script.versions[0]
                ? {
                    id: script.versions[0].id,
                    versionLabel: script.versions[0].versionLabel,
                    releasedAt: script.versions[0].releasedAt,
                }
                : null,
            isAuthenticated: Boolean(userId),
            isPurchased: false,
            requiresAuthToPurchase: true,
        };
    }
    async enrichDetailWithPurchase(detail, userId) {
        if (!userId) {
            return detail;
        }
        const purchase = await this.prisma.purchase.findUnique({
            where: { userId_scriptId: { userId, scriptId: detail.id } },
        });
        return {
            ...detail,
            isAuthenticated: true,
            isPurchased: Boolean(purchase),
        };
    }
    async findBySlug(slug) {
        const script = await this.prisma.script.findFirst({
            where: { slug, isPublished: true },
            include: {
                media: { orderBy: { sortOrder: 'asc' } },
                versions: { where: { isCurrent: true }, take: 1 },
            },
        });
        if (!script) {
            throw new common_1.NotFoundException('Script not found');
        }
        return script;
    }
    async findById(id) {
        const script = await this.prisma.script.findUnique({
            where: { id },
            include: {
                media: { orderBy: { sortOrder: 'asc' } },
                versions: { orderBy: { releasedAt: 'desc' } },
            },
        });
        if (!script) {
            throw new common_1.NotFoundException('Script not found');
        }
        return script;
    }
    async recordView(scriptId, userId, ipHash) {
        await this.prisma.script.findFirstOrThrow({
            where: { id: scriptId, isPublished: true },
        });
        await this.prisma.scriptView.create({
            data: { scriptId, userId, ipHash },
        });
        return { ok: true };
    }
    async recordClick(scriptId, userId, ipHash) {
        await this.prisma.script.findFirstOrThrow({
            where: { id: scriptId, isPublished: true },
        });
        await this.prisma.scriptClick.create({
            data: { scriptId, userId, ipHash },
        });
        return { ok: true };
    }
    async create(input) {
        const slug = input.slug?.trim() || (0, utils_1.slugify)(input.title);
        const existing = await this.prisma.script.findUnique({ where: { slug } });
        if (existing) {
            throw new common_1.BadRequestException('Slug already exists');
        }
        return this.prisma.script.create({
            data: {
                title: input.title,
                slug,
                shortDescription: input.shortDescription,
                gameCategory: input.gameCategory,
                priceRub: input.priceRub,
                priceUsd: input.priceUsd,
                discountPercent: input.discountPercent,
                badge: input.badge ?? client_1.ScriptBadge.none,
                instructionHtml: input.instructionHtml ?? '',
                isPublished: input.isPublished ?? false,
                featuredOnHome: input.featuredOnHome ?? false,
                publishedAt: input.isPublished ? new Date() : null,
            },
            include: this.scriptInclude,
        });
    }
    async update(id, input) {
        const current = await this.findById(id);
        if (input.slug && input.slug !== current.slug) {
            const existing = await this.prisma.script.findUnique({
                where: { slug: input.slug },
            });
            if (existing) {
                throw new common_1.BadRequestException('Slug already exists');
            }
        }
        const isPublished = input.isPublished ?? current.isPublished;
        return this.prisma.script.update({
            where: { id },
            data: {
                ...input,
                publishedAt: isPublished && !current.publishedAt ? new Date() : current.publishedAt,
            },
            include: this.scriptInclude,
        });
    }
    async unpublish(id) {
        return this.prisma.script.update({
            where: { id },
            data: { isPublished: false },
            include: this.scriptInclude,
        });
    }
    async addMedia(scriptId, data) {
        await this.findById(scriptId);
        return this.prisma.scriptMedia.create({
            data: {
                scriptId,
                type: data.type,
                url: data.url,
                sortOrder: data.sortOrder ?? 0,
            },
        });
    }
    async uploadImage(scriptId, file, sortOrder = 0) {
        this.storage.assertSize(file.buffer);
        this.storage.assertImageMime(file.mimetype);
        const key = this.storage.buildKey(`scripts/${scriptId}/images`, file.originalname);
        const { key: storageKey } = await this.storage.upload(key, file.buffer, file.mimetype);
        return this.addMedia(scriptId, {
            type: client_1.ScriptMediaType.image,
            url: storageKey,
            sortOrder,
        });
    }
    async addVersion(scriptId, file, versionLabel) {
        this.storage.assertSize(file.buffer);
        this.storage.assertScriptMime(file.mimetype);
        const script = await this.findById(scriptId);
        const key = this.storage.buildKey(`scripts/${scriptId}/files`, file.originalname);
        const { key: storageKey } = await this.storage.upload(key, file.buffer, file.mimetype);
        await this.prisma.scriptVersion.updateMany({
            where: { scriptId, isCurrent: true },
            data: { isCurrent: false },
        });
        const version = await this.prisma.scriptVersion.create({
            data: {
                scriptId,
                versionLabel,
                storageKey,
                fileName: file.originalname,
                fileSize: file.size,
                isCurrent: true,
            },
        });
        await this.prisma.script.update({
            where: { id: scriptId },
            data: { fileUpdatedAt: new Date() },
        });
        const purchasers = await this.prisma.purchase.findMany({
            where: { scriptId },
            select: { userId: true },
        });
        if (purchasers.length > 0) {
            await this.notifications.createMany(purchasers.map((p) => ({
                userId: p.userId,
                type: 'script_update',
                title: 'Обновление скрипта',
                body: `Вышло новое обновление для «${script.title}»`,
                payload: { scriptId, versionId: version.id },
            })));
        }
        return version;
    }
    async listAll() {
        return this.prisma.script.findMany({
            orderBy: { createdAt: 'desc' },
            include: this.scriptInclude,
        });
    }
    async getStats(scriptId, from, to) {
        await this.findById(scriptId);
        const dateFilter = {};
        if (from)
            dateFilter.gte = from;
        if (to)
            dateFilter.lte = to;
        const hasDate = from || to;
        const [views, clicks, purchases, comments] = await Promise.all([
            this.prisma.scriptView.count({
                where: {
                    scriptId,
                    ...(hasDate ? { createdAt: dateFilter } : {}),
                },
            }),
            this.prisma.scriptClick.count({
                where: {
                    scriptId,
                    ...(hasDate ? { createdAt: dateFilter } : {}),
                },
            }),
            this.prisma.purchase.count({
                where: {
                    scriptId,
                    ...(hasDate ? { purchasedAt: dateFilter } : {}),
                },
            }),
            this.prisma.comment.count({
                where: {
                    scriptId,
                    ...(hasDate ? { createdAt: dateFilter } : {}),
                },
            }),
        ]);
        return { views, clicks, purchases, comments };
    }
};
exports.ScriptsService = ScriptsService;
exports.ScriptsService = ScriptsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        storage_service_1.StorageService,
        notifications_service_1.NotificationsService])
], ScriptsService);
//# sourceMappingURL=scripts.service.js.map