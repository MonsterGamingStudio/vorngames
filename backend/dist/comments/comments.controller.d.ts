import type { Request } from 'express';
import { CommentStatus, User } from '../generated/prisma/client';
import { CommentsService } from './comments.service';
declare class CreateCommentDto {
    text: string;
}
declare class ModerateCommentDto {
    status: 'approved' | 'rejected';
}
export declare class CommentsController {
    private readonly comments;
    constructor(comments: CommentsService);
    list(slug: string): Promise<{
        id: string;
        text: string;
        createdAt: Date;
        author: {
            id: string;
            username: string;
            avatarUrl: string;
        };
    }[]>;
    create(slug: string, body: CreateCommentDto, req: Request & {
        user: User;
    }): Promise<{
        id: string;
        message: string;
    }>;
}
export declare class AdminCommentsController {
    private readonly comments;
    constructor(comments: CommentsService);
    list(status?: string): never[] | Promise<({
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
    moderate(id: string, body: ModerateCommentDto, req: Request & {
        user: User;
    }): Promise<{
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
export {};
