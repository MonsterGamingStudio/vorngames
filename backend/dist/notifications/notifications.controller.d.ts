import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { MarkNotificationsReadQueryDto, NotificationListQueryDto } from './dto/notification.dto';
import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notifications;
    constructor(notifications: NotificationsService);
    list(req: Request & {
        user: User;
    }, query: NotificationListQueryDto): Promise<{
        items: {
            id: string;
            createdAt: Date;
            title: string;
            type: import("../generated/prisma/enums").NotificationType;
            userId: string;
            body: string;
            payload: import("@prisma/client/runtime/client").JsonValue | null;
            readAt: Date | null;
        }[];
        page: number;
        limit: number;
    }>;
    unreadCount(req: Request & {
        user: User;
    }): Promise<{
        count: number;
    }>;
    markRead(req: Request & {
        user: User;
    }, query: MarkNotificationsReadQueryDto): Promise<{
        ok: boolean;
    }>;
}
