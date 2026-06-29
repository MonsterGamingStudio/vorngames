import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GameCategory,
  Prisma,
  Script,
  ScriptBadge,
  ScriptMediaType,
} from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { slugify } from '../common/utils';
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

@Injectable()
export class ScriptsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly notifications: NotificationsService,
  ) {}

  private scriptInclude = {
    media: { orderBy: { sortOrder: 'asc' as const } },
    versions: { where: { isCurrent: true }, take: 1 },
  };

  private mapMediaItem(m: {
    id: string;
    type: ScriptMediaType;
    url: string;
    sortOrder: number;
  }) {
    return {
      id: m.id,
      type: m.type,
      sortOrder: m.sortOrder,
      url:
        m.type === ScriptMediaType.youtube
          ? m.url
          : this.storage.getPublicUrl(m.url),
    };
  }

  private mapMediaItems(
    media: Array<{
      id: string;
      type: ScriptMediaType;
      url: string;
      sortOrder: number;
    }>,
  ) {
    return media.map((m) => this.mapMediaItem(m));
  }

  toListItem(script: Script & { media: { url: string; type: string }[] }) {
    const coverRaw =
      script.media.find((m) => m.type === ScriptMediaType.image)?.url ?? null;
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

  toListItemWithMedia(
    script: Script & {
      media: Array<{
        id: string;
        type: ScriptMediaType;
        url: string;
        sortOrder: number;
      }>;
    },
  ) {
    return {
      ...this.toListItem(script),
      media: this.mapMediaItems(script.media),
    };
  }

  async list(query: ScriptListQuery) {
    const where: Prisma.ScriptWhereInput = { isPublished: true };

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
        items: ordered.map((s) => this.toListItem(s!)),
        total: await this.prisma.script.count({ where }),
        page: query.page,
        limit: query.limit,
      };
    }

    const orderBy: Prisma.ScriptOrderByWithRelationInput =
      query.sort === 'price_desc'
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

    return scripts.map((s) => this.toListItemWithMedia(s));
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
      .map((s) => this.toListItemWithMedia(s!));
  }

  toDetail(
    script: Script & {
      media: Array<{ id: string; type: ScriptMediaType; url: string; sortOrder: number }>;
      versions: Array<{ id: string; versionLabel: string; releasedAt: Date }>;
    },
    userId?: string,
  ) {
    const coverRaw =
      script.media.find((m) => m.type === ScriptMediaType.image)?.url ?? null;

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
      media: this.mapMediaItems(script.media),
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

  async enrichDetailWithPurchase(
    detail: ReturnType<ScriptsService['toDetail']>,
    userId?: string,
  ) {
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

  async findBySlug(slug: string) {
    const script = await this.prisma.script.findFirst({
      where: { slug, isPublished: true },
      include: {
        media: { orderBy: { sortOrder: 'asc' } },
        versions: { where: { isCurrent: true }, take: 1 },
      },
    });

    if (!script) {
      throw new NotFoundException('Script not found');
    }

    return script;
  }

  async findById(id: string) {
    const script = await this.prisma.script.findUnique({
      where: { id },
      include: {
        media: { orderBy: { sortOrder: 'asc' } },
        versions: { orderBy: { releasedAt: 'desc' } },
      },
    });

    if (!script) {
      throw new NotFoundException('Script not found');
    }

    return script;
  }

  async recordView(scriptId: string, userId: string | null, ipHash: string) {
    return this.recordAnalytics('view', scriptId, userId, ipHash);
  }

  async recordClick(scriptId: string, userId: string | null, ipHash: string) {
    return this.recordAnalytics('click', scriptId, userId, ipHash);
  }

  private readonly analyticsDedupeMs = 24 * 60 * 60 * 1000;

  private async recordAnalytics(
    type: 'view' | 'click',
    scriptId: string,
    userId: string | null,
    ipHash: string,
  ) {
    await this.prisma.script.findFirstOrThrow({
      where: { id: scriptId, isPublished: true },
    });

    const since = new Date(Date.now() - this.analyticsDedupeMs);

    if (type === 'view') {
      const existing = await this.prisma.scriptView.findFirst({
        where: userId
          ? { scriptId, userId, createdAt: { gte: since } }
          : { scriptId, userId: null, ipHash, createdAt: { gte: since } },
      });
      if (existing) {
        return { ok: true, recorded: false };
      }
      await this.prisma.scriptView.create({
        data: { scriptId, userId, ipHash },
      });
    } else {
      const existing = await this.prisma.scriptClick.findFirst({
        where: userId
          ? { scriptId, userId, createdAt: { gte: since } }
          : { scriptId, userId: null, ipHash, createdAt: { gte: since } },
      });
      if (existing) {
        return { ok: true, recorded: false };
      }
      await this.prisma.scriptClick.create({
        data: { scriptId, userId, ipHash },
      });
    }

    return { ok: true, recorded: true };
  }

  async create(input: CreateScriptInput) {
    const slug = input.slug?.trim() || slugify(input.title);
    const existing = await this.prisma.script.findUnique({ where: { slug } });
    if (existing) {
      throw new BadRequestException('Slug already exists');
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
        badge: input.badge ?? ScriptBadge.none,
        instructionHtml: input.instructionHtml ?? '',
        isPublished: input.isPublished ?? false,
        featuredOnHome: input.featuredOnHome ?? false,
        publishedAt: input.isPublished ? new Date() : null,
      },
      include: this.scriptInclude,
    });
  }

  async update(id: string, input: UpdateScriptInput) {
    const current = await this.findById(id);

    if (input.slug && input.slug !== current.slug) {
      const existing = await this.prisma.script.findUnique({
        where: { slug: input.slug },
      });
      if (existing) {
        throw new BadRequestException('Slug already exists');
      }
    }

    const isPublished = input.isPublished ?? current.isPublished;

    return this.prisma.script.update({
      where: { id },
      data: {
        ...input,
        publishedAt:
          isPublished && !current.publishedAt ? new Date() : current.publishedAt,
      },
      include: this.scriptInclude,
    });
  }

  async unpublish(id: string) {
    return this.prisma.script.update({
      where: { id },
      data: { isPublished: false },
      include: this.scriptInclude,
    });
  }

  async addMedia(
    scriptId: string,
    data: {
      type: ScriptMediaType;
      url: string;
      sortOrder?: number;
    },
  ) {
    await this.findById(scriptId);
    const created = await this.prisma.scriptMedia.create({
      data: {
        scriptId,
        type: data.type,
        url: data.url,
        sortOrder: data.sortOrder ?? 0,
      },
    });
    return this.mapMediaItem(created);
  }

  async uploadImage(scriptId: string, file: Express.Multer.File, sortOrder = 0) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    this.storage.assertSize(file.buffer);
    this.storage.assertImageMime(file.mimetype);
    const key = this.storage.buildKey(`scripts/${scriptId}/images`, file.originalname);
    const { key: storageKey } = await this.storage.upload(
      key,
      file.buffer,
      file.mimetype,
    );
    return this.addMedia(scriptId, {
      type: ScriptMediaType.image,
      url: storageKey,
      sortOrder,
    });
  }

  async addVersion(
    scriptId: string,
    file: Express.Multer.File,
    versionLabel: string,
  ) {
    this.storage.assertSize(file.buffer);
    this.storage.assertScriptMime(file.mimetype);

    const script = await this.findById(scriptId);
    const key = this.storage.buildKey(`scripts/${scriptId}/files`, file.originalname);
    const { key: storageKey } = await this.storage.upload(
      key,
      file.buffer,
      file.mimetype,
    );

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
      await this.notifications.createMany(
        purchasers.map((p) => ({
          userId: p.userId,
          type: 'script_update' as const,
          title: 'Обновление скрипта',
          body: `Вышло новое обновление для «${script.title}»`,
          payload: { scriptId, versionId: version.id },
        })),
      );
    }

    return version;
  }

  async listMedia(scriptId: string) {
    const script = await this.findById(scriptId);
    return this.mapMediaItems(script.media);
  }

  async removeMedia(scriptId: string, mediaId: string) {
    const media = await this.prisma.scriptMedia.findFirst({
      where: { id: mediaId, scriptId },
    });

    if (!media) {
      throw new NotFoundException('Media not found');
    }

    if (media.type === ScriptMediaType.image) {
      try {
        await this.storage.delete(media.url);
      } catch {
        // ignore missing storage file
      }
    }

    await this.prisma.scriptMedia.delete({ where: { id: mediaId } });
    return { ok: true };
  }

  async reorderMedia(
    scriptId: string,
    items: { id: string; sortOrder: number }[],
  ) {
    await this.findById(scriptId);

    const ids = items.map((i) => i.id);
    const existing = await this.prisma.scriptMedia.findMany({
      where: { scriptId, id: { in: ids } },
    });

    if (existing.length !== ids.length) {
      throw new BadRequestException('One or more media items not found');
    }

    await this.prisma.$transaction(
      items.map(({ id, sortOrder }) =>
        this.prisma.scriptMedia.update({
          where: { id },
          data: { sortOrder },
        }),
      ),
    );

    return this.listMedia(scriptId);
  }

  async listAll() {
    return this.prisma.script.findMany({
      orderBy: { createdAt: 'desc' },
      include: this.scriptInclude,
    });
  }

  async getStats(scriptId: string, from?: Date, to?: Date) {
    await this.findById(scriptId);
    const dateFilter: Prisma.DateTimeFilter = {};
    if (from) dateFilter.gte = from;
    if (to) dateFilter.lte = to;
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
}
