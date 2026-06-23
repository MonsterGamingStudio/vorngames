import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notifications;
    constructor(notifications: NotificationsService);
    list(req: Request & {
        user: User;
    }, unreadOnly?: string, page?: string, limit?: string): Promise<{
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
    }, ids?: string): Promise<{
        ok: boolean;
    }>;
}
