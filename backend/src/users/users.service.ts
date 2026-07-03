import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  Currency,
  GameCategory,
  Prisma,
  User,
  UserRole,
} from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AdminSyncService } from './admin-sync.service';

export type SteamProfileInput = {
  steamId: string;
  username: string;
  avatarUrl: string;
};

export type AchievementDto = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  unlocked: boolean;
  color: string;
};

const ACHIEVEMENTS = [
  {
    id: 'top_commentator',
    titleKey: 'achievements.topCommentator.title',
    descriptionKey: 'achievements.topCommentator.description',
    color: 'orange',
    check: async (prisma: PrismaService, userId: string) => {
      const groups = await prisma.comment.groupBy({
        by: ['scriptId'],
        where: { userId, status: 'approved' },
      });
      return groups.length >= 15;
    },
  },
  {
    id: 'active_buyer',
    titleKey: 'achievements.activeBuyer.title',
    descriptionKey: 'achievements.activeBuyer.description',
    color: 'green',
    check: async (prisma: PrismaService, userId: string) => {
      const count = await prisma.purchase.count({ where: { userId } });
      return count >= 10;
    },
  },
  {
    id: 'sandbox_lover',
    titleKey: 'achievements.sandboxLover.title',
    descriptionKey: 'achievements.sandboxLover.description',
    color: 'purple',
    check: async (prisma: PrismaService, userId: string) => {
      const count = await prisma.purchase.count({
        where: {
          userId,
          script: { gameCategory: GameCategory.gmod },
        },
      });
      return count >= 1;
    },
  },
] as const;

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly adminSync: AdminSyncService,
  ) {}

  findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findBySteamId(steamId: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { steamId } });
  }

  async upsertFromSteam(
    profile: SteamProfileInput,
    loginIp?: string,
  ): Promise<User> {
    const role = this.adminSync.resolveRole(profile.steamId);

    return this.prisma.user.upsert({
      where: { steamId: profile.steamId },
      create: {
        steamId: profile.steamId,
        username: profile.username,
        avatarUrl: profile.avatarUrl,
        role,
        lastLoginIp: loginIp,
        lastLoginAt: new Date(),
      },
      update: {
        username: profile.username,
        avatarUrl: profile.avatarUrl,
        role,
        lastLoginIp: loginIp,
        lastLoginAt: new Date(),
      },
    });
  }

  async recordLogin(userId: string, ip?: string): Promise<User> {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        lastLoginIp: ip,
        lastLoginAt: new Date(),
        role: undefined,
      },
    });
  }

  async refreshSteamProfile(user: User): Promise<User> {
    const role = this.adminSync.resolveRole(user.steamId);
    if (user.role !== role) {
      return this.prisma.user.update({
        where: { id: user.id },
        data: { role },
      });
    }
    return user;
  }

  async getAchievements(userId: string): Promise<AchievementDto[]> {
    return Promise.all(
      ACHIEVEMENTS.map(async (achievement) => ({
        id: achievement.id,
        titleKey: achievement.titleKey,
        descriptionKey: achievement.descriptionKey,
        color: achievement.color,
        unlocked: await achievement.check(this.prisma, userId),
      })),
    );
  }

  async listUsers(options: {
    search?: string;
    skip: number;
    take: number;
  }) {
    const where: Prisma.UserWhereInput = {};
    if (options.search) {
      where.OR = [
        { username: { contains: options.search, mode: 'insensitive' } },
        { steamId: { contains: options.search } },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: options.skip,
        take: options.take,
      }),
      this.prisma.user.count({ where }),
    ]);

    return { items, total };
  }

  updateUser(
    userId: string,
    data: {
      isBlocked?: boolean;
      blockedReason?: string | null;
      role?: UserRole;
    },
  ) {
    return this.prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  static toBalanceNumber(balance: Prisma.Decimal): number {
    return balance.toNumber();
  }

  static formatPublicUser(user: User) {
    return {
      id: user.id,
      username: user.username,
      avatarUrl: user.avatarUrl,
      steamId: user.steamId,
      createdAt: user.createdAt,
    };
  }
}
