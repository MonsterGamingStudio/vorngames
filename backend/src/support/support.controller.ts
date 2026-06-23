import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { SupportTicketStatus, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { SupportService } from './support.service';

class CreateTicketDto {
  subject!: string;
  body!: string;
}

class AddMessageDto {
  body!: string;
}

@ApiTags('support')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('support/tickets')
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class SupportController {
  constructor(private readonly support: SupportService) {}

  @Post()
  @ApiOperation({ summary: 'Create support ticket' })
  create(
    @Body() body: CreateTicketDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.createTicket(req.user, body.subject, body.body);
  }

  @Get()
  @ApiOperation({ summary: 'List own tickets' })
  list(@Req() req: Request & { user: User }) {
    return this.support.listUserTickets(req.user.id);
  }

  @Get(':number')
  @ApiOperation({ summary: 'Get ticket with messages' })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, false);
  }

  @Post(':number/messages')
  @ApiOperation({ summary: 'Add message to ticket' })
  addMessage(
    @Param('number') number: string,
    @Body() body: AddMessageDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.addMessage(number, req.user, body.body, false);
  }
}

@ApiTags('admin/support')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('admin/support/tickets')
@UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
export class AdminSupportController {
  constructor(private readonly support: SupportService) {}

  @Get()
  @ApiOperation({ summary: 'List all support tickets' })
  list(@Query('status') status?: SupportTicketStatus) {
    return this.support.listAllTickets(status);
  }

  @Get(':number')
  @ApiOperation({ summary: 'Get ticket (admin)' })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, true);
  }

  @Post(':number/messages')
  @ApiOperation({ summary: 'Reply to ticket' })
  reply(
    @Param('number') number: string,
    @Body() body: AddMessageDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.addMessage(number, req.user, body.body, true);
  }

  @Patch(':number/close')
  @ApiOperation({ summary: 'Close ticket' })
  close(@Param('number') number: string) {
    return this.support.closeTicket(number);
  }
}
