import { Controller, Get, NotFoundException, Param, Req, UseGuards } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AuthService } from '../auth/auth.service';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiDocs } from '../common/swagger/api-docs';
import { getClientIp } from '../common/utils';
import { UsersService } from '../users/users.service';
import {
  ProfileMeResponseDto,
  PublicProfileResponseDto,
} from './dto/profile.dto';

@ApiTags('profile')
@Controller()
export class ProfileController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('profile/me')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @ApiOperation(ApiDocs.profile.me)
  @ApiOkResponse({ type: ProfileMeResponseDto })
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
  @ApiOperation(ApiDocs.profile.public)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: PublicProfileResponseDto })
  @ApiNotFoundResponse({ description: 'User not found' })
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
