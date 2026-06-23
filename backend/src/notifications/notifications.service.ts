import { Injectable } from '@nestjs/common';
import { NotificationType, Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export type CreateNotificationInput = {
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  payload?: Prisma.InputJsonValue;
};

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: CreateNotificationInput) {
    return this.prisma.notification.create({ data: input });
  }

  createMany(inputs: CreateNotificationInput[]) {
    return this.prisma.notification.createMany({ data: inputs });
  }

  list(userId: string, options: { unreadOnly?: boolean; skip: number; take: number }) {
    const where: Prisma.NotificationWhereInput = { userId };
    if (options.unreadOnly) {
      where.readAt = null;
    }

    return this.prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: options.skip,
      take: options.take,
    });
  }

  countUnread(userId: string) {
    return this.prisma.notification.count({
      where: { userId, readAt: null },
    });
  }

  markRead(userId: string, ids?: string[]) {
    const where: Prisma.NotificationWhereInput = {
      userId,
      readAt: null,
    };
    if (ids?.length) {
      where.id = { in: ids };
    }

    return this.prisma.notification.updateMany({
      where,
      data: { readAt: new Date() },
    });
  }
}
