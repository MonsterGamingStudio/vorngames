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
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Currency, UserRole } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { parsePagination } from '../common/utils';
import { PrismaService } from '../prisma/prisma.service';
import { PurchasesService } from '../purchases/purchases.service';
import { ScriptsService } from '../scripts/scripts.service';
import { UsersService } from '../users/users.service';

class UpdateUserDto {
  isBlocked?: boolean;
  blockedReason?: string;
  role?: UserRole;
}

class GrantPurchaseDto {
  scriptId!: string;
  currency?: Currency;
}

class IpBlockDto {
  ip!: string;
  reason?: string;
}

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
  @ApiOperation({ summary: 'List users' })
  async listUsers(
    @Query('search') search?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pagination = parsePagination({ page, limit });
    return this.users.listUsers({
      search,
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  @Patch('users/:id')
  @ApiOperation({ summary: 'Update user block/role' })
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.users.updateUser(id, body);
  }

  @Post('users/:id/purchases/grant')
  @ApiOperation({ summary: 'Grant script to user' })
  grantPurchase(@Param('id') id: string, @Body() body: GrantPurchaseDto) {
    return this.purchases.grantPurchase(
      id,
      body.scriptId,
      body.currency ?? Currency.RUB,
    );
  }

  @Delete('users/:userId/purchases/:purchaseId')
  @ApiOperation({ summary: 'Revoke purchase' })
  revokePurchase(@Param('purchaseId') purchaseId: string) {
    return this.purchases.revokePurchase(purchaseId);
  }

  @Post('ip-blocks')
  @ApiOperation({ summary: 'Block IP address' })
  async blockIp(@Body() body: IpBlockDto) {
    return this.prisma.ipBlock.upsert({
      where: { ip: body.ip },
      create: { ip: body.ip, reason: body.reason },
      update: { reason: body.reason },
    });
  }

  @Delete('ip-blocks/:ip')
  @ApiOperation({ summary: 'Unblock IP address' })
  unblockIp(@Param('ip') ip: string) {
    return this.prisma.ipBlock.delete({ where: { ip } });
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Admin dashboard aggregates' })
  async dashboard() {
    const [users, scripts, purchases, openTickets, pendingComments] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.script.count({ where: { isPublished: true } }),
        this.prisma.purchase.count(),
        this.prisma.supportTicket.count({
          where: { status: 'open' },
        }),
        this.prisma.comment.count({ where: { status: 'pending' } }),
      ]);

    return { users, scripts, purchases, openTickets, pendingComments };
  }
}
