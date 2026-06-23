import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CommentStatus, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { ScriptsService } from '../scripts/scripts.service';

@Injectable()
export class CommentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notifications: NotificationsService,
    private readonly scripts: ScriptsService,
  ) {}

  async listApproved(slug: string) {
    const script = await this.scripts.findBySlug(slug);

    const comments = await this.prisma.comment.findMany({
      where: { scriptId: script.id, status: CommentStatus.approved },
      orderBy: { createdAt: 'desc' },
      include: {
        user: { select: { id: true, username: true, avatarUrl: true } },
      },
    });

    return comments.map((c) => ({
      id: c.id,
      text: c.text,
      createdAt: c.createdAt,
      author: c.user,
    }));
  }

  async create(user: User, slug: string, text: string) {
    const trimmed = text.trim();
    if (trimmed.length < 2) {
      throw new BadRequestException('Comment is too short');
    }

    const script = await this.scripts.findBySlug(slug);

    const comment = await this.prisma.comment.create({
      data: {
        scriptId: script.id,
        userId: user.id,
        text: trimmed,
        status: CommentStatus.pending,
      },
    });

    await this.notifications.create({
      userId: user.id,
      type: 'comment_submitted',
      title: 'Комментарий отправлен',
      body: 'Ваш комментарий отправлен на модерацию и будет опубликован после одобрения',
      payload: { commentId: comment.id, scriptId: script.id },
    });

    return {
      id: comment.id,
      message:
        'Комментарий отправлен на модерацию и будет опубликован после одобрения администрацией',
    };
  }

  async listPending() {
    return this.prisma.comment.findMany({
      where: { status: CommentStatus.pending },
      orderBy: { createdAt: 'asc' },
      include: {
        user: { select: { id: true, username: true, avatarUrl: true } },
        script: { select: { id: true, title: true, slug: true } },
      },
    });
  }

  async moderate(
    commentId: string,
    moderatorId: string,
    status: 'approved' | 'rejected',
  ) {
    const comment = await this.prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    if (comment.status !== CommentStatus.pending) {
      throw new BadRequestException('Comment already moderated');
    }

    const commentStatus =
      status === 'approved'
        ? CommentStatus.approved
        : CommentStatus.rejected;

    const updated = await this.prisma.comment.update({
      where: { id: commentId },
      data: {
        status: commentStatus,
        moderatedAt: new Date(),
        moderatedById: moderatorId,
      },
    });

    if (commentStatus === CommentStatus.approved) {
      await this.notifications.create({
        userId: comment.userId,
        type: 'comment_approved',
        title: 'Комментарий одобрен',
        body: 'Ваш комментарий прошёл модерацию и опубликован',
        payload: { commentId: comment.id, scriptId: comment.scriptId },
      });
    }

    return updated;
  }
}
