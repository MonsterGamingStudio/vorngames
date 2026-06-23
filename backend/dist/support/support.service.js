"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../common/utils");
const notifications_service_1 = require("../notifications/notifications.service");
let SupportService = class SupportService {
    prisma;
    notifications;
    constructor(prisma, notifications) {
        this.prisma = prisma;
        this.notifications = notifications;
    }
    async uniqueTicketNumber() {
        for (let i = 0; i < 5; i++) {
            const ticketNumber = (0, utils_1.generateTicketNumber)();
            const exists = await this.prisma.supportTicket.findUnique({
                where: { ticketNumber },
            });
            if (!exists) {
                return ticketNumber;
            }
        }
        throw new common_1.BadRequestException('Could not generate ticket number');
    }
    async createTicket(user, subject, body) {
        const ticketNumber = await this.uniqueTicketNumber();
        const ticket = await this.prisma.supportTicket.create({
            data: {
                ticketNumber,
                userId: user.id,
                subject: subject.trim(),
                messages: {
                    create: {
                        authorId: user.id,
                        isStaff: false,
                        body: body.trim(),
                    },
                },
            },
            include: { messages: true },
        });
        await this.notifications.create({
            userId: user.id,
            type: 'support_ticket_created',
            title: 'Обращение в поддержку создано',
            body: `Тикет ${ticketNumber} принят в обработку`,
            payload: { ticketNumber },
        });
        return ticket;
    }
    listUserTickets(userId) {
        return this.prisma.supportTicket.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getTicket(ticketNumber, userId, isStaff) {
        const ticket = await this.prisma.supportTicket.findUnique({
            where: { ticketNumber },
            include: {
                messages: {
                    orderBy: { createdAt: 'asc' },
                    include: {
                        author: {
                            select: { id: true, username: true, avatarUrl: true },
                        },
                    },
                },
            },
        });
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        if (!isStaff && ticket.userId !== userId) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        return ticket;
    }
    async addMessage(ticketNumber, author, body, isStaff) {
        const ticket = await this.getTicket(ticketNumber, author.id, isStaff);
        if (ticket.status === client_1.SupportTicketStatus.closed) {
            throw new common_1.BadRequestException('Ticket is closed');
        }
        const message = await this.prisma.supportMessage.create({
            data: {
                ticketId: ticket.id,
                authorId: author.id,
                isStaff,
                body: body.trim(),
            },
        });
        if (isStaff) {
            await this.notifications.create({
                userId: ticket.userId,
                type: 'support_reply',
                title: 'Ответ техподдержки',
                body: `Поступил ответ по тикету ${ticketNumber}`,
                payload: { ticketNumber },
            });
        }
        return message;
    }
    listAllTickets(status) {
        return this.prisma.supportTicket.findMany({
            where: status ? { status } : undefined,
            orderBy: { updatedAt: 'desc' },
            include: {
                user: { select: { id: true, username: true, steamId: true } },
            },
        });
    }
    async closeTicket(ticketNumber) {
        const ticket = await this.prisma.supportTicket.findUnique({
            where: { ticketNumber },
        });
        if (!ticket) {
            throw new common_1.NotFoundException('Ticket not found');
        }
        return this.prisma.supportTicket.update({
            where: { id: ticket.id },
            data: { status: client_1.SupportTicketStatus.closed, closedAt: new Date() },
        });
    }
};
exports.SupportService = SupportService;
exports.SupportService = SupportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], SupportService);
//# sourceMappingURL=support.service.js.map