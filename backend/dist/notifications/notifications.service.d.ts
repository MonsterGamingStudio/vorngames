import { NotificationType, Prisma } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export type CreateNotificationInput = {
    userId: string;
    type: NotificationType;
    title: string;
    body: string;
    payload?: Prisma.InputJsonValue;
};
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: CreateNotificationInput): Prisma.Prisma__NotificationClient<{
        id: string;
        createdAt: Date;
        title: string;
        type: NotificationType;
        userId: string;
        body: string;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
        readAt: Date | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    createMany(inputs: CreateNotificationInput[]): Prisma.PrismaPromise<Prisma.BatchPayload>;
    list(userId: string, options: {
        unreadOnly?: boolean;
        skip: number;
        take: number;
    }): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        title: string;
        type: NotificationType;
        userId: string;
        body: string;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
        readAt: Date | null;
    }[]>;
    countUnread(userId: string): Prisma.PrismaPromise<number>;
    markRead(userId: string, ids?: string[]): Prisma.PrismaPromise<Prisma.BatchPayload>;
}
