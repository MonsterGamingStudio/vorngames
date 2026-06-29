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
import { ApiDocs } from '../common/swagger/api-docs';
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
  @ApiOperation(ApiDocs.support.create)
  @ApiBody({ type: CreateTicketDto })
  @ApiOkResponse({ type: SupportTicketDto })
  create(
    @Body() body: CreateTicketDto,
    @Req() req: Request & { user: User },
  ) {
    return this.support.createTicket(req.user, body.subject, body.body);
  }

  @Get()
  @ApiOperation(ApiDocs.support.list)
  @ApiOkResponse({ type: SupportTicketDto, isArray: true })
  list(@Req() req: Request & { user: User }) {
    return this.support.listUserTickets(req.user.id);
  }

  @Get(':number')
  @ApiOperation(ApiDocs.support.get)
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiOkResponse({ type: SupportTicketDetailDto })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, false);
  }

  @Post(':number/messages')
  @ApiOperation(ApiDocs.support.addMessage)
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
  @ApiOperation(ApiDocs.support.adminList)
  @ApiQuery({ name: 'status', required: false, enum: SupportTicketStatusDto })
  @ApiOkResponse({ type: AdminSupportTicketDto, isArray: true })
  list(@Query('status') status?: SupportTicketStatus) {
    return this.support.listAllTickets(status);
  }

  @Get(':number')
  @ApiOperation(ApiDocs.support.adminGet)
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  @ApiOkResponse({ type: SupportTicketDetailDto })
  get(
    @Param('number') number: string,
    @Req() req: Request & { user: User },
  ) {
    return this.support.getTicket(number, req.user.id, true);
  }

  @Post(':number/messages')
  @ApiOperation(ApiDocs.support.adminReply)
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
  @ApiOperation(ApiDocs.support.adminClose)
  @ApiParam({ name: 'number', example: 'VG-20260625-1234' })
  close(@Param('number') number: string) {
    return this.support.closeTicket(number);
  }
}
