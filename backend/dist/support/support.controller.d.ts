import type { Request } from 'express';
import { SupportTicketStatus, User } from '../generated/prisma/client';
import { SupportService } from './support.service';
declare class CreateTicketDto {
    subject: string;
    body: string;
}
declare class AddMessageDto {
    body: string;
}
export declare class SupportController {
    private readonly support;
    constructor(support: SupportService);
    create(body: CreateTicketDto, req: Request & {
        user: User;
    }): Promise<{
        messages: {
            id: string;
            createdAt: Date;
            ticketId: string;
            authorId: string;
            isStaff: boolean;
            body: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }>;
    list(req: Request & {
        user: User;
    }): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }[]>;
    get(number: string, req: Request & {
        user: User;
    }): Promise<{
        messages: ({
            author: {
                id: string;
                username: string;
                avatarUrl: string;
            };
        } & {
            id: string;
            createdAt: Date;
            ticketId: string;
            authorId: string;
            isStaff: boolean;
            body: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }>;
    addMessage(number: string, body: AddMessageDto, req: Request & {
        user: User;
    }): Promise<{
        id: string;
        createdAt: Date;
        ticketId: string;
        authorId: string;
        isStaff: boolean;
        body: string;
    }>;
}
export declare class AdminSupportController {
    private readonly support;
    constructor(support: SupportService);
    list(status?: SupportTicketStatus): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        user: {
            id: string;
            steamId: string;
            username: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    })[]>;
    get(number: string, req: Request & {
        user: User;
    }): Promise<{
        messages: ({
            author: {
                id: string;
                username: string;
                avatarUrl: string;
            };
        } & {
            id: string;
            createdAt: Date;
            ticketId: string;
            authorId: string;
            isStaff: boolean;
            body: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }>;
    reply(number: string, body: AddMessageDto, req: Request & {
        user: User;
    }): Promise<{
        id: string;
        createdAt: Date;
        ticketId: string;
        authorId: string;
        isStaff: boolean;
        body: string;
    }>;
    close(number: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }>;
}
export {};
