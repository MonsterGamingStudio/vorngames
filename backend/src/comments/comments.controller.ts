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
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { CommentStatus, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiDocs } from '../common/swagger/api-docs';
import {
  CommentDto,
  CreateCommentDto,
  CreateCommentResponseDto,
  ModerateCommentDto,
  PendingCommentDto,
} from './dto/comment.dto';
import { CommentsService } from './comments.service';

@ApiTags('comments')
@Controller()
export class CommentsController {
  constructor(private readonly comments: CommentsService) {}

  @Get('scripts/:slug/comments')
  @ApiOperation(ApiDocs.comments.list)
  @ApiParam({ name: 'slug', example: 'shop-tycoon' })
  @ApiOkResponse({ type: CommentDto, isArray: true })
  list(@Param('slug') slug: string) {
    return this.comments.listApproved(slug);
  }

  @Post('scripts/:slug/comments')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @ApiOperation(ApiDocs.comments.create)
  @ApiParam({ name: 'slug', example: 'shop-tycoon' })
  @ApiBody({ type: CreateCommentDto })
  @ApiOkResponse({ type: CreateCommentResponseDto })
  @ApiUnauthorizedResponse({ description: 'Steam login required' })
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
  @ApiOperation(ApiDocs.comments.listPending)
  @ApiQuery({ name: 'status', required: false, example: 'pending' })
  @ApiOkResponse({ type: PendingCommentDto, isArray: true })
  list(@Query('status') status?: string) {
    if (status === 'pending' || !status) {
      return this.comments.listPending();
    }
    return [];
  }

  @Patch(':id')
  @ApiOperation(ApiDocs.comments.moderate)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiBody({ type: ModerateCommentDto })
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
