import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { CommentStatus, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommentsService } from './comments.service';

class CreateCommentDto {
  text!: string;
}

class ModerateCommentDto {
  status!: 'approved' | 'rejected';
}

@ApiTags('comments')
@Controller()
export class CommentsController {
  constructor(private readonly comments: CommentsService) {}

  @Get('scripts/:slug/comments')
  @ApiOperation({ summary: 'List approved comments' })
  list(@Param('slug') slug: string) {
    return this.comments.listApproved(slug);
  }

  @Post('scripts/:slug/comments')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @ApiOperation({ summary: 'Create comment (pending moderation)' })
  @UseGuards(JwtAuthGuard, BlockedUserGuard)
  create(
    @Param('slug') slug: string,
    @Body() body: CreateCommentDto,
    @Req() req: Request & { user: User },
  ) {
    return this.comments.create(req.user, slug, body.text);
  }
}

@ApiTags('admin/comments')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('admin/comments')
@UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
export class AdminCommentsController {
  constructor(private readonly comments: CommentsService) {}

  @Get()
  @ApiOperation({ summary: 'List comments for moderation' })
  list(@Query('status') status?: string) {
    if (status === 'pending' || !status) {
      return this.comments.listPending();
    }
    return [];
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Approve or reject comment' })
  moderate(
    @Param('id') id: string,
    @Body() body: ModerateCommentDto,
    @Req() req: Request & { user: User },
  ) {
    const status =
      body.status === 'approved'
        ? CommentStatus.approved
        : CommentStatus.rejected;
    return this.comments.moderate(id, req.user.id, status);
  }
}
