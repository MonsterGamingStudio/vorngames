import { CommentStatus, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
import { ScriptsService } from '../scripts/scripts.service';
export declare class CommentsService {
    private readonly prisma;
    private readonly notifications;
    private readonly scripts;
    constructor(prisma: PrismaService, notifications: NotificationsService, scripts: ScriptsService);
    listApproved(slug: string): Promise<{
        id: string;
        text: string;
        createdAt: Date;
        author: {
            id: string;
            username: string;
            avatarUrl: string;
        };
    }[]>;
    create(user: User, slug: string, text: string): Promise<{
        id: string;
        message: string;
    }>;
    listPending(): Promise<({
        script: {
            id: string;
            slug: string;
            title: string;
        };
        user: {
            id: string;
            username: string;
            avatarUrl: string;
        };
    } & {
        id: string;
        createdAt: Date;
        scriptId: string;
        userId: string;
        text: string;
        status: CommentStatus;
        moderatedAt: Date | null;
        moderatedById: string | null;
    })[]>;
    moderate(commentId: string, moderatorId: string, status: 'approved' | 'rejected'): Promise<{
        id: string;
        createdAt: Date;
        scriptId: string;
        userId: string;
        text: string;
        status: CommentStatus;
        moderatedAt: Date | null;
        moderatedById: string | null;
    }>;
}
