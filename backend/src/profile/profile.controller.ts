import { Controller, Get, NotFoundException, Param, Req, UseGuards } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AuthService } from '../auth/auth.service';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { getClientIp } from '../common/utils';
import { UsersService } from '../users/users.service';

@ApiTags('profile')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller()
export class ProfileController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('profile/me')
  @ApiOperation({ summary: 'Extended profile with achievements' })
  @UseGuards(JwtAuthGuard, BlockedUserGuard)
  async getMe(@Req() req: Request & { user: User }) {
    const user = await this.authService.getCurrentUser(
      req.user,
      getClientIp(req),
    );
    const achievements = await this.usersService.getAchievements(user.id);

    return {
      ...this.authService.toUserResponse(user),
      achievements,
    };
  }

  @Get('users/:id')
  @ApiOperation({ summary: 'Public user profile' })
  async getPublic(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const achievements = await this.usersService.getAchievements(user.id);

    return {
      ...UsersService.formatPublicUser(user),
      achievements,
    };
  }
}
