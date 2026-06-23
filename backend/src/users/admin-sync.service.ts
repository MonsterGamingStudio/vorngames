import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRole } from '../generated/prisma/client';

@Injectable()
export class AdminSyncService {
  constructor(private readonly config: ConfigService) {}

  resolveRole(steamId: string): UserRole {
    const adminIds = this.config
      .get<string>('STEAM_ADMIN_IDS', '')
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    return adminIds.includes(steamId) ? UserRole.admin : UserRole.user;
  }
}
