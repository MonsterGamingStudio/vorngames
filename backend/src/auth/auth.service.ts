import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '../generated/prisma/client';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from '../users/users.service';

type JwtPayload = {
  sub: string;
  steamId: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}

  async validateSteamProfile(
    profile: {
      id: string;
      displayName?: string;
      photos?: Array<{ value: string }>;
    },
    loginIp?: string,
  ): Promise<User> {
    const steamProfile = {
      steamId: profile.id,
      username: profile.displayName ?? 'Steam User',
      avatarUrl:
        profile.photos?.[2]?.value ??
        profile.photos?.[0]?.value ??
        'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff25dc1cdfeb_full.jpg',
    };

    return this.usersService.upsertFromSteam(steamProfile, loginIp);
  }

  signToken(user: User): string {
    const payload: JwtPayload = {
      sub: user.id,
      steamId: user.steamId,
    };

    return this.jwtService.sign(payload);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.usersService.findById(id);
  }

  async getCurrentUser(user: User, loginIp?: string): Promise<User> {
    const refreshed = await this.usersService.refreshSteamProfile(user);
    if (loginIp) {
      return this.usersService.recordLogin(refreshed.id, loginIp);
    }
    return refreshed;
  }

  toUserResponse(user: User): UserResponseDto {
    return {
      id: user.id,
      steamId: user.steamId,
      username: user.username,
      avatarUrl: user.avatarUrl,
      balance: UsersService.toBalanceNumber(user.balance),
      role: user.role,
      isBlocked: user.isBlocked,
      createdAt: user.createdAt,
    };
  }

  getFrontendUrl(): string {
    return this.config.getOrThrow<string>('FRONTEND_URL');
  }
}
