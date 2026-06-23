import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SupportTicketStatus, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { generateTicketNumber } from '../common/utils';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class SupportService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notifications: NotificationsService,
  ) {}

  private async uniqueTicketNumber(): Promise<string> {
    for (let i = 0; i < 5; i++) {
      const ticketNumber = generateTicketNumber();
      const exists = await this.prisma.supportTicket.findUnique({
        where: { ticketNumber },
      });
      if (!exists) {
        return ticketNumber;
      }
    }
    throw new BadRequestException('Could not generate ticket number');
  }

  async createTicket(user: User, subject: string, body: string) {
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

  listUserTickets(userId: string) {
    return this.prisma.supportTicket.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getTicket(ticketNumber: string, userId: string, isStaff: boolean) {
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
      throw new NotFoundException('Ticket not found');
    }

    if (!isStaff && ticket.userId !== userId) {
      throw new NotFoundException('Ticket not found');
    }

    return ticket;
  }

  async addMessage(
    ticketNumber: string,
    author: User,
    body: string,
    isStaff: boolean,
  ) {
    const ticket = await this.getTicket(
      ticketNumber,
      author.id,
      isStaff,
    );

    if (ticket.status === SupportTicketStatus.closed) {
      throw new BadRequestException('Ticket is closed');
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

  listAllTickets(status?: SupportTicketStatus) {
    return this.prisma.supportTicket.findMany({
      where: status ? { status } : undefined,
      orderBy: { updatedAt: 'desc' },
      include: {
        user: { select: { id: true, username: true, steamId: true } },
      },
    });
  }

  async closeTicket(ticketNumber: string) {
    const ticket = await this.prisma.supportTicket.findUnique({
      where: { ticketNumber },
    });

    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    return this.prisma.supportTicket.update({
      where: { id: ticket.id },
      data: { status: SupportTicketStatus.closed, closedAt: new Date() },
    });
  }
}
