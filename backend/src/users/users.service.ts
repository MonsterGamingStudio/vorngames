import { Injectable } from '@nestjs/common';
import { Prisma, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export type SteamProfileInput = {
  steamId: string;
  username: string;
  avatarUrl: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async upsertFromSteam(profile: SteamProfileInput): Promise<User> {
    return this.prisma.user.upsert({
      where: { steamId: profile.steamId },
      create: {
        steamId: profile.steamId,
        username: profile.username,
        avatarUrl: profile.avatarUrl,
      },
      update: {
        username: profile.username,
        avatarUrl: profile.avatarUrl,
      },
    });
  }

  static toBalanceNumber(balance: Prisma.Decimal): number {
    return balance.toNumber();
  }
}
