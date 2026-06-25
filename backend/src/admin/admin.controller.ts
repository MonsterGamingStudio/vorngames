import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
import { Currency } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { parsePagination } from '../common/utils';
import { GrantPurchaseDto } from '../purchases/dto/purchase.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PurchasesService } from '../purchases/purchases.service';
import { ScriptsService } from '../scripts/scripts.service';
import { UsersService } from '../users/users.service';
import {
  AdminDashboardDto,
  AdminUsersQueryDto,
  IpBlockDto,
  UpdateUserDto,
} from './dto/admin.dto';

@ApiTags('admin')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('admin')
@UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
export class AdminController {
  constructor(
    private readonly users: UsersService,
    private readonly purchases: PurchasesService,
    private readonly scripts: ScriptsService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('users')
  @ApiOperation({ summary: 'List users with search and pagination' })
  @ApiOkResponse({
    schema: {
      properties: {
        items: { type: 'array', items: { type: 'object' } },
        total: { type: 'number', example: 100 },
      },
    },
  })
  async listUsers(@Query() query: AdminUsersQueryDto) {
    const pagination = parsePagination({
      page: query.page,
      limit: query.limit,
    });
    return this.users.listUsers({
      search: query.search,
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  @Patch('users/:id')
  @ApiOperation({ summary: 'Block/unblock user or change role' })
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiBody({ type: UpdateUserDto })
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.users.updateUser(id, body);
  }

  @Post('users/:id/purchases/grant')
  @ApiOperation({ summary: 'Grant script purchase to user (admin)' })
  @ApiParam({ name: 'id', format: 'uuid', description: 'User ID' })
  @ApiBody({ type: GrantPurchaseDto })
  grantPurchase(@Param('id') id: string, @Body() body: GrantPurchaseDto) {
    return this.purchases.grantPurchase(
      id,
      body.scriptId,
      body.currency ?? Currency.RUB,
    );
  }

  @Delete('users/:userId/purchases/:purchaseId')
  @ApiOperation({ summary: 'Revoke purchase from user' })
  @ApiParam({ name: 'userId', format: 'uuid' })
  @ApiParam({ name: 'purchaseId', format: 'uuid' })
  revokePurchase(@Param('purchaseId') purchaseId: string) {
    return this.purchases.revokePurchase(purchaseId);
  }

  @Post('ip-blocks')
  @ApiOperation({ summary: 'Block IP address' })
  @ApiBody({ type: IpBlockDto })
  async blockIp(@Body() body: IpBlockDto) {
    return this.prisma.ipBlock.upsert({
      where: { ip: body.ip },
      create: { ip: body.ip, reason: body.reason },
      update: { reason: body.reason },
    });
  }

  @Delete('ip-blocks/:ip')
  @ApiOperation({ summary: 'Unblock IP address' })
  @ApiParam({ name: 'ip', example: '203.0.113.10' })
  unblockIp(@Param('ip') ip: string) {
    return this.prisma.ipBlock.delete({ where: { ip } });
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Admin dashboard aggregates' })
  @ApiOkResponse({ type: AdminDashboardDto })
  async dashboard(): Promise<AdminDashboardDto> {
    const [users, scripts, purchases, openTickets, pendingComments] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.script.count({ where: { isPublished: true } }),
        this.prisma.purchase.count(),
        this.prisma.supportTicket.count({ where: { status: 'open' } }),
        this.prisma.comment.count({ where: { status: 'pending' } }),
      ]);

    return { users, scripts, purchases, openTickets, pendingComments };
  }
}
