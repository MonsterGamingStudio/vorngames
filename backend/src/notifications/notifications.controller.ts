import { Controller, Get, Patch, Query, Req, UseGuards } from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CountResponseDto, OkResponseDto } from '../common/dto/common.dto';
import { parsePagination } from '../common/utils';
import {
  MarkNotificationsReadQueryDto,
  NotificationListQueryDto,
  NotificationListResponseDto,
} from './dto/notification.dto';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('notifications')
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class NotificationsController {
  constructor(private readonly notifications: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'List user notifications' })
  @ApiOkResponse({ type: NotificationListResponseDto })
  async list(
    @Req() req: Request & { user: User },
    @Query() query: NotificationListQueryDto,
  ) {
    const pagination = parsePagination({
      page: query.page,
      limit: query.limit,
    });
    const items = await this.notifications.list(req.user.id, {
      unreadOnly: query.unreadOnly === 'true',
      skip: pagination.skip,
      take: pagination.limit,
    });

    return { items, page: pagination.page, limit: pagination.limit };
  }

  @Get('unread-count')
  @ApiOperation({ summary: 'Unread notifications count' })
  @ApiOkResponse({ type: CountResponseDto })
  async unreadCount(@Req() req: Request & { user: User }) {
    const count = await this.notifications.countUnread(req.user.id);
    return { count };
  }

  @Patch('read')
  @ApiOperation({ summary: 'Mark notifications as read' })
  @ApiQuery({ name: 'ids', required: false, description: 'Comma-separated IDs' })
  @ApiOkResponse({ type: OkResponseDto })
  async markRead(
    @Req() req: Request & { user: User },
    @Query() query: MarkNotificationsReadQueryDto,
  ) {
    const idList = query.ids?.split(',').filter(Boolean);
    await this.notifications.markRead(req.user.id, idList);
    return { ok: true };
  }
}
