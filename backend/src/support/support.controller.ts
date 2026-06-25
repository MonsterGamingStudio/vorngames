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
  ApiBody,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { SupportTicketStatus, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  AddMessageDto,
  AdminSupportTicketDto,
  CreateTicketDto,
  SupportTicketDetailDto,
  SupportTicketDto,
  SupportTicketStatusDto,
} from './dto/support.dto';
import { SupportService } from './support.service';

@ApiTags('support')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('support/tickets')
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class SupportController {
  constructor(private readonly support: SupportService) {}

  @Post()
  @ApiOperation({ summary: 'Create support ticket from profile' })
  @ApiBody({ type: CreateTicketDto })
  @ApiOkResponse({ type: SupportTicketDto })
  create(
    @Body() body: CreateTicketDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.createTicket(req.user, body.subject, body.body);
  }

  @Get()
  @ApiOperation({ summary: 'List own support tickets' })
  @ApiOkResponse({ type: SupportTicketDto, isArray: true })
  list(@Req() req: Request & { user: User }) {
    return this.support.listUserTickets(req.user.id);
  }

  @Get(':number')
  @ApiOperation({ summary: 'Get ticket with message history' })
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiOkResponse({ type: SupportTicketDetailDto })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, false);
  }

  @Post(':number/messages')
  @ApiOperation({ summary: 'Add message to open ticket' })
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiBody({ type: AddMessageDto })
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
  @ApiQuery({ name: 'status', required: false, enum: SupportTicketStatusDto })
  @ApiOkResponse({ type: AdminSupportTicketDto, isArray: true })
  list(@Query('status') status?: SupportTicketStatus) {
    return this.support.listAllTickets(status);
  }

  @Get(':number')
  @ApiOperation({ summary: 'Get ticket with messages (admin)' })
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiOkResponse({ type: SupportTicketDetailDto })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, true);
  }

  @Post(':number/messages')
  @ApiOperation({ summary: 'Reply to ticket (notifies user)' })
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiBody({ type: AddMessageDto })
  reply(
    @Param('number') number: string,
    @Body() body: AddMessageDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.addMessage(number, req.user, body.body, true);
  }

  @Patch(':number/close')
  @ApiOperation({ summary: 'Close support ticket' })
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  close(@Param('number') number: string) {
    return this.support.closeTicket(number);
  }
}
