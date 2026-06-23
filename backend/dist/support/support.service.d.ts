import { SupportTicketStatus, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class SupportService {
    private readonly prisma;
    private readonly notifications;
    constructor(prisma: PrismaService, notifications: NotificationsService);
    private uniqueTicketNumber;
    createTicket(user: User, subject: string, body: string): Promise<{
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
    listUserTickets(userId: string): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: SupportTicketStatus;
        ticketNumber: string;
        subject: string;
        closedAt: Date | null;
    }[]>;
    getTicket(ticketNumber: string, userId: string, isStaff: boolean): Promise<{
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
    addMessage(ticketNumber: string, author: User, body: string, isStaff: boolean): Promise<{
        id: string;
        createdAt: Date;
        ticketId: string;
        authorId: string;
        isStaff: boolean;
        body: string;
    }>;
    listAllTickets(status?: SupportTicketStatus): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    closeTicket(ticketNumber: string): Promise<{
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
