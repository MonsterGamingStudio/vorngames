import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-steam';
import { User } from '../generated/prisma/client';
import { AuthService } from './auth.service';

@Injectable()
export class SteamStrategy extends PassportStrategy(Strategy, 'steam') {
  constructor(
    config: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      returnURL: config.getOrThrow<string>('STEAM_RETURN_URL'),
      realm: config.getOrThrow<string>('STEAM_REALM'),
      apiKey: config.get<string>('STEAM_API_KEY') || 'placeholder',
    });
  }

  async validate(
    _identifier: string,
    profile: {
      id: string;
      displayName?: string;
      photos?: Array<{ value: string }>;
    },
  ): Promise<User> {
    return this.authService.validateSteamProfile(profile);
  }
}
