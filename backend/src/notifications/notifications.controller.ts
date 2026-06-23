import { Controller, Get, Patch, Query, Req, UseGuards } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { parsePagination } from '../common/utils';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('notifications')
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class NotificationsController {
  constructor(private readonly notifications: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'List notifications' })
  async list(
    @Req() req: Request & { user: User },
    @Query('unreadOnly') unreadOnly?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pagination = parsePagination({ page, limit });
    const items = await this.notifications.list(req.user.id, {
      unreadOnly: unreadOnly === 'true',
      skip: pagination.skip,
      take: pagination.limit,
    });

    return { items, page: pagination.page, limit: pagination.limit };
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Unread notifications count' })
  async unreadCount(@Req() req: Request & { user: User }) {
    const count = await this.notifications.countUnread(req.user.id);
    return { count };
  }

  @Patch('read')
  @ApiOperation({ summary: 'Mark notifications as read' })
  async markRead(
    @Req() req: Request & { user: User },
    @Query('ids') ids?: string,
  ) {
    const idList = ids?.split(',').filter(Boolean);
    await this.notifications.markRead(req.user.id, idList);
    return { ok: true };
  }
}
