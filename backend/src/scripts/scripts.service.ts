import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import {
  CommentStatus,
  GameCategory,
  Prisma,
  Script,
  ScriptBadge,
  ScriptMediaType,
} from '../generated/prisma/client';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { StorageService } from '../storage/storage.service';
import { slugify } from '../common/utils';
import {
  applyDiscount,
  hasActiveDiscount,
  normalizeDiscountPercent,
} from '../common/utils/price.util';
import {
  formatUploadError,
  formatUploadFileMeta,
} from '../common/utils/upload-log.util';
import { NotificationsService } from '../notifications/notifications.service';

export type ScriptListQuery = {
  search?: string;
  gameCategory?: GameCategory;
  sort?: 'price_asc' | 'price_desc' | 'relevance' | 'popular' | 'comments';
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
  discountPercent?: number | null;
  badge?: ScriptBadge;
  instructionHtml?: string;
  isPublished?: boolean;
  featuredOnHome?: boolean;
};

export type UpdateScriptInput = Partial<CreateScriptInput> & {
  badge?: ScriptBadge | null;
};

@Injectable()
export class ScriptsService {
  private readonly logger = new Logger(ScriptsService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: StorageService,
    private readonly notifications: NotificationsService,
    private readonly config: ConfigService,
  ) {}

  private scriptInclude = {
    media: { orderBy: { sortOrder: 'asc' as const } },
    versions: { where: { isCurrent: true }, take: 1 },
  };

  private readonly catalogWhere: Prisma.ScriptWhereInput = {
    isPublished: true,
    deletedAt: null,
  };

  private serializePrice(value: Prisma.Decimal | number): number {
    return Number(value);
  }

  private resolveCoverUrl(
    script: Pick<Script, 'coverKey'> & {
      media: { url: string; type: string }[];
    },
  ): string | null {
    if (script.coverKey) {
      return this.storage.getPublicUrl(script.coverKey);
    }
    const fallback =
      script.media.find((m) => m.type === ScriptMediaType.image)?.url ?? null;
    return fallback ? this.storage.getPublicUrl(fallback) : null;
  }

  private shuffleArray<T>(items: T[]): T[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  private mapBadgeFields(badge: ScriptBadge) {
    return {
      badge: badge === ScriptBadge.none ? null : badge,
      hasUniqueOffer: badge !== ScriptBadge.none,
    };
  }

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

  private mapPriceFields(script: Pick<Script, 'priceRub' | 'priceUsd' | 'discountPercent'>) {
    const priceRub = this.serializePrice(script.priceRub);
    const priceUsd = this.serializePrice(script.priceUsd);
    const discountPercent = normalizeDiscountPercent(script.discountPercent);

    return {
      priceRub,
      priceUsd,
      discountPercent,
      finalPriceRub: applyDiscount(priceRub, discountPercent),
      finalPriceUsd: applyDiscount(priceUsd, discountPercent),
      hasDiscount: hasActiveDiscount(discountPercent),
    };
  }

  toListItem(
    script: Script & { media: { url: string; type: string }[] },
  ) {
    return {
      id: script.id,
      slug: script.slug,
      title: script.title,
      shortDescription: script.shortDescription,
      gameCategory: script.gameCategory,
      ...this.mapPriceFields(script),
      ...this.getTebexFields(script),
      ...this.mapBadgeFields(script.badge),
      featuredOnHome: script.featuredOnHome,
      coverUrl: this.resolveCoverUrl(script),
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
    const where: Prisma.ScriptWhereInput = { ...this.catalogWhere };

    if (query.search) {
      where.title = { contains: query.search, mode: 'insensitive' };
    }
    if (query.gameCategory) {
      where.gameCategory = query.gameCategory;
    }

    const skip = (query.page - 1) * query.limit;
    const sort = query.sort ?? 'relevance';

    if (sort === 'popular') {
      return this.listByViewCount(where, skip, query);
    }

    if (sort === 'comments') {
      return this.listByCommentCount(where, skip, query);
    }

    if (sort === 'relevance' && query.search) {
      const all = await this.prisma.script.findMany({
        where,
        include: this.scriptInclude,
        orderBy: { publishedAt: 'desc' },
      });
      const term = query.search.toLowerCase();
      all.sort((a, b) => {
        const aStarts = a.title.toLowerCase().startsWith(term) ? 0 : 1;
        const bStarts = b.title.toLowerCase().startsWith(term) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        return (
          (b.publishedAt?.getTime() ?? 0) - (a.publishedAt?.getTime() ?? 0)
        );
      });
      return {
        items: all.slice(skip, skip + query.limit).map((s) => this.toListItem(s)),
        total: all.length,
        page: query.page,
        limit: query.limit,
      };
    }

    const orderBy: Prisma.ScriptOrderByWithRelationInput =
      sort === 'price_desc'
        ? { priceRub: 'desc' }
        : sort === 'price_asc'
          ? { priceRub: 'asc' }
          : { publishedAt: 'desc' };

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

  private async listByViewCount(
    where: Prisma.ScriptWhereInput,
    skip: number,
    query: ScriptListQuery,
  ) {
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
      where: { id: { in: ids }, ...this.catalogWhere },
      include: this.scriptInclude,
    });
    const ordered = ids
      .map((id) => scripts.find((s) => s.id === id))
      .filter(Boolean);

    const total = await this.prisma.scriptView.groupBy({
      by: ['scriptId'],
      where: { createdAt: { gte: since }, script: where },
    });

    return {
      items: ordered.map((s) => this.toListItem(s!)),
      total: total.length,
      page: query.page,
      limit: query.limit,
    };
  }

  private async listByCommentCount(
    where: Prisma.ScriptWhereInput,
    skip: number,
    query: ScriptListQuery,
  ) {
    const ranked = await this.prisma.comment.groupBy({
      by: ['scriptId'],
      where: { status: CommentStatus.approved, script: where },
      _count: { scriptId: true },
      orderBy: { _count: { scriptId: 'desc' } },
      skip,
      take: query.limit,
    });

    const ids = ranked.map((r) => r.scriptId);
    if (ids.length === 0) {
      return { items: [], total: 0, page: query.page, limit: query.limit };
    }

    const scripts = await this.prisma.script.findMany({
      where: { id: { in: ids }, ...this.catalogWhere },
      include: this.scriptInclude,
    });
    const ordered = ids
      .map((id) => scripts.find((s) => s.id === id))
      .filter(Boolean);

    const total = await this.prisma.script.count({
      where: {
        ...where,
        comments: { some: { status: CommentStatus.approved } },
      },
    });

    return {
      items: ordered.map((s) => this.toListItem(s!)),
      total,
      page: query.page,
      limit: query.limit,
    };
  }

  async getRandom(count = 4) {
    const featured = await this.prisma.script.findMany({
      where: { ...this.catalogWhere, featuredOnHome: true },
      select: { id: true },
    });

    if (featured.length === 0) {
      return [];
    }

    const shuffledIds = this.shuffleArray(featured)
      .slice(0, count)
      .map((s) => s.id);

    const scripts = await this.prisma.script.findMany({
      where: { id: { in: shuffledIds } },
      include: this.scriptInclude,
    });

    const byId = new Map(scripts.map((s) => [s.id, s]));
    return shuffledIds
      .map((id) => byId.get(id))
      .filter(Boolean)
      .map((s) => this.toListItemWithMedia(s!));
  }

  async getPopular(limit = 4) {
    const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const popular = await this.prisma.scriptView.groupBy({
      by: ['scriptId'],
      where: {
        createdAt: { gte: since },
        script: { ...this.catalogWhere },
      },
      _count: { scriptId: true },
      orderBy: { _count: { scriptId: 'desc' } },
      take: limit,
    });

    const popularIds = popular.map((p) => p.scriptId);
    const ordered: Array<
      Script & {
        media: Array<{
          id: string;
          type: ScriptMediaType;
          url: string;
          sortOrder: number;
        }>;
        versions: Array<{ id: string; versionLabel: string; releasedAt: Date }>;
      }
    > = [];

    if (popularIds.length > 0) {
      const scripts = await this.prisma.script.findMany({
        where: { id: { in: popularIds }, ...this.catalogWhere },
        include: this.scriptInclude,
      });
      for (const id of popularIds) {
        const script = scripts.find((s) => s.id === id);
        if (script) ordered.push(script);
      }
    }

    if (ordered.length < limit) {
      const excludeIds = ordered.map((s) => s.id);
      const filler = await this.prisma.script.findMany({
        where: {
          ...this.catalogWhere,
          ...(excludeIds.length ? { id: { notIn: excludeIds } } : {}),
        },
        include: this.scriptInclude,
      });
      ordered.push(
        ...this.shuffleArray(filler).slice(0, limit - ordered.length),
      );
    }

    return ordered.map((s) => this.toListItemWithMedia(s));
  }

  toDetail(
    script: Script & {
      media: Array<{ id: string; type: ScriptMediaType; url: string; sortOrder: number }>;
      versions: Array<{ id: string; versionLabel: string; releasedAt: Date }>;
    },
    userId?: string,
  ) {
    return {
      ...this.toListItem(script),
      instructionHtml: script.instructionHtml,
      media: this.mapMediaItems(script.media),
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

  toAdminItem(
    script: Script & {
      media: Array<{
        id: string;
        type: ScriptMediaType;
        url: string;
        sortOrder: number;
      }>;
      versions: Array<{ id: string; versionLabel: string; releasedAt: Date }>;
    },
  ) {
    return {
      ...this.toListItemWithMedia(script),
      instructionHtml: script.instructionHtml,
      isPublished: script.isPublished,
      featuredOnHome: script.featuredOnHome,
      createdAt: script.createdAt,
      updatedAt: script.updatedAt,
      currentVersion: script.versions[0]
        ? {
            id: script.versions[0].id,
            versionLabel: script.versions[0].versionLabel,
            releasedAt: script.versions[0].releasedAt,
          }
        : null,
    };
  }

  getTebexFields(script: Pick<Script, 'gameCategory' | 'tebexPackageId'>) {
    return {
      tebexPackageId: script.tebexPackageId,
      tebexPayUrl: this.buildTebexPayUrl(
        script.gameCategory,
        script.tebexPackageId,
      ),
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
      where: { slug, ...this.catalogWhere },
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

    if (!script || script.deletedAt) {
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
    await this.assertPublishedScript(scriptId);

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
    const existing = await this.prisma.script.findFirst({
      where: { slug, deletedAt: null },
    });
    if (existing) {
      throw new BadRequestException('Slug already exists');
    }

    const created = await this.prisma.script.create({
      data: {
        title: input.title,
        slug,
        shortDescription: input.shortDescription,
        gameCategory: input.gameCategory,
        priceRub: input.priceRub,
        priceUsd: input.priceUsd,
        tebexPackageId: input.tebexPackageId,
        discountPercent: normalizeDiscountPercent(input.discountPercent),
        badge: input.badge == null ? ScriptBadge.none : input.badge,
        instructionHtml: input.instructionHtml ?? '',
        isPublished: input.isPublished ?? false,
        featuredOnHome: input.featuredOnHome ?? false,
        publishedAt: input.isPublished ? new Date() : null,
      },
      include: this.scriptInclude,
    });

    return this.toAdminItem(created);
  }

  async update(id: string, input: UpdateScriptInput) {
    const current = await this.findById(id);

    if (input.slug && input.slug !== current.slug) {
      const existing = await this.prisma.script.findFirst({
        where: { slug: input.slug, deletedAt: null, NOT: { id } },
      });
      if (existing) {
        throw new BadRequestException('Slug already exists');
      }
    }

    const isPublished = input.isPublished ?? current.isPublished;

    const updated = await this.prisma.script.update({
      where: { id },
      data: {
        ...this.buildUpdateData(input),
        publishedAt:
          isPublished && !current.publishedAt ? new Date() : current.publishedAt,
      },
      include: this.scriptInclude,
    });

    return this.toAdminItem(updated);
  }

  private buildUpdateData(input: UpdateScriptInput): Prisma.ScriptUpdateInput {
    const data: Prisma.ScriptUpdateInput = {};

    if (input.title !== undefined) data.title = input.title;
    if (input.slug !== undefined) data.slug = input.slug;
    if (input.shortDescription !== undefined) {
      data.shortDescription = input.shortDescription;
    }
    if (input.gameCategory !== undefined) data.gameCategory = input.gameCategory;
    if (input.priceRub !== undefined) data.priceRub = input.priceRub;
    if (input.priceUsd !== undefined) data.priceUsd = input.priceUsd;
    if (input.tebexPackageId !== undefined) {
      data.tebexPackageId = input.tebexPackageId;
    }
    if ('discountPercent' in input) {
      data.discountPercent = normalizeDiscountPercent(input.discountPercent);
    }
    if (input.instructionHtml !== undefined) {
      data.instructionHtml = input.instructionHtml;
    }
    if (input.isPublished !== undefined) data.isPublished = input.isPublished;
    if (input.featuredOnHome !== undefined) {
      data.featuredOnHome = input.featuredOnHome;
    }
    if ('badge' in input) {
      data.badge =
        input.badge == null ? ScriptBadge.none : input.badge;
    }

    return data;
  }

  private buildTebexPayUrl(
    gameCategory: GameCategory,
    tebexPackageId: number | null,
  ): string | null {
    if (!tebexPackageId) return null;

    const base =
      gameCategory === GameCategory.gmod
        ? this.config.get<string>('TEBEX_GMOD_STORE_URL')
        : this.config.get<string>('TEBEX_FIVEM_STORE_URL');

    if (!base) return null;
    const normalized = base.replace(/\/+$/, '');
    return `${normalized}/package/${tebexPackageId}`;
  }

  async unpublish(id: string) {
    await this.findById(id);

    const updated = await this.prisma.script.update({
      where: { id },
      data: {
        isPublished: false,
        deletedAt: new Date(),
      },
      include: this.scriptInclude,
    });

    return this.toAdminItem(updated);
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
    const context = { kind: 'script-image', scriptId, sortOrder };
    this.logger.log(
      `[uploadImage:start] ${JSON.stringify({
        ...context,
        file: formatUploadFileMeta(file),
      })}`,
    );

    if (!file) {
      this.logger.error(`[uploadImage] file missing ${JSON.stringify(context)}`);
      throw new BadRequestException('File is required');
    }
    if (!file.buffer?.length) {
      this.logger.error(
        `[uploadImage] buffer missing ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
        })}`,
      );
      throw new BadRequestException('File buffer is empty or unreadable');
    }

    try {
      this.storage.assertSize(file.buffer, context);
      this.storage.assertImageMime(file.mimetype, context);
      const key = this.storage.buildKey(
        `scripts/${scriptId}/images`,
        file.originalname,
      );
      const { key: storageKey } = await this.storage.upload(
        key,
        file.buffer,
        file.mimetype,
        context,
      );
      const result = await this.addMedia(scriptId, {
        type: ScriptMediaType.image,
        url: storageKey,
        sortOrder,
      });
      this.logger.log(
        `[uploadImage:ok] ${JSON.stringify({ ...context, storageKey })}`,
      );
      return result;
    } catch (error) {
      this.logger.error(
        `[uploadImage:fail] ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
          error: formatUploadError(error),
        })}`,
      );
      throw error;
    }
  }

  async uploadCover(scriptId: string, file: Express.Multer.File) {
    const context = { kind: 'script-cover', scriptId };
    this.logger.log(
      `[uploadCover:start] ${JSON.stringify({
        ...context,
        file: formatUploadFileMeta(file),
      })}`,
    );

    if (!file) {
      this.logger.error(`[uploadCover] file missing ${JSON.stringify(context)}`);
      throw new BadRequestException('File is required');
    }
    if (!file.buffer?.length) {
      this.logger.error(
        `[uploadCover] buffer missing ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
        })}`,
      );
      throw new BadRequestException('File buffer is empty or unreadable');
    }

    try {
      this.storage.assertSize(file.buffer, context);
      this.storage.assertImageMime(file.mimetype, context);

      const script = await this.findById(scriptId);
      const key = this.storage.buildKey(
        `scripts/${scriptId}/cover`,
        file.originalname,
      );
      const { key: storageKey } = await this.storage.upload(
        key,
        file.buffer,
        file.mimetype,
        context,
      );

      if (script.coverKey && script.coverKey !== storageKey) {
        try {
          await this.storage.delete(script.coverKey, {
            ...context,
            phase: 'replace-old-cover',
          });
        } catch (error) {
          this.logger.warn(
            `[uploadCover] old cover delete failed ${JSON.stringify({
              ...context,
              oldCoverKey: script.coverKey,
              error: formatUploadError(error),
            })}`,
          );
        }
      }

      await this.prisma.script.update({
        where: { id: scriptId },
        data: { coverKey: storageKey },
      });

      this.logger.log(
        `[uploadCover:ok] ${JSON.stringify({ ...context, storageKey })}`,
      );
      return { coverUrl: this.storage.getPublicUrl(storageKey) };
    } catch (error) {
      this.logger.error(
        `[uploadCover:fail] ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
          error: formatUploadError(error),
        })}`,
      );
      throw error;
    }
  }

  async removeCover(scriptId: string) {
    const script = await this.findById(scriptId);
    if (!script.coverKey) {
      return { ok: true };
    }

    try {
      await this.storage.delete(script.coverKey);
    } catch {
      // ignore missing storage file
    }

    await this.prisma.script.update({
      where: { id: scriptId },
      data: { coverKey: null },
    });

    return { ok: true };
  }

  private async assertPublishedScript(scriptId: string) {
    const script = await this.prisma.script.findFirst({
      where: { id: scriptId, ...this.catalogWhere },
    });
    if (!script) {
      throw new NotFoundException('Script not found');
    }
  }

  async addVersion(
    scriptId: string,
    file: Express.Multer.File,
    versionLabel: string,
  ) {
    const context = { kind: 'script-version', scriptId, versionLabel };
    this.logger.log(
      `[addVersion:start] ${JSON.stringify({
        ...context,
        file: formatUploadFileMeta(file),
      })}`,
    );

    if (!file) {
      this.logger.error(`[addVersion] file missing ${JSON.stringify(context)}`);
      throw new BadRequestException('File is required');
    }
    if (!file.buffer?.length) {
      this.logger.error(
        `[addVersion] buffer missing ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
        })}`,
      );
      throw new BadRequestException('File buffer is empty or unreadable');
    }

    try {
      this.storage.assertSize(file.buffer, context);
      this.storage.assertScriptMime(file.mimetype, context);

      const script = await this.findById(scriptId);
      const key = this.storage.buildKey(
        `scripts/${scriptId}/files`,
        file.originalname,
      );
      const { key: storageKey } = await this.storage.upload(
        key,
        file.buffer,
        file.mimetype,
        context,
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

      this.logger.log(
        `[addVersion:ok] ${JSON.stringify({
          ...context,
          storageKey,
          versionId: version.id,
        })}`,
      );
      return version;
    } catch (error) {
      this.logger.error(
        `[addVersion:fail] ${JSON.stringify({
          ...context,
          file: formatUploadFileMeta(file),
          error: formatUploadError(error),
        })}`,
      );
      throw error;
    }
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
    const scripts = await this.prisma.script.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: 'desc' },
      include: this.scriptInclude,
    });

    return scripts.map((script) => this.toAdminItem(script));
  }

  async getStats(scriptId: string, from?: Date, to?: Date) {
    await this.findById(scriptId);

    if (from && Number.isNaN(from.getTime())) {
      throw new BadRequestException('Invalid from date');
    }
    if (to && Number.isNaN(to.getTime())) {
      throw new BadRequestException('Invalid to date');
    }
    if (from && to && from > to) {
      throw new BadRequestException('from must be before to');
    }

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
