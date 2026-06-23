import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { Currency, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PurchasesService } from './purchases.service';

@ApiTags('purchases')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller()
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class PurchasesController {
  constructor(private readonly purchases: PurchasesService) {}

  @Post('scripts/:id/purchase')
  @ApiOperation({
    summary: 'Create script purchase payment (Steam login required)',
  })
  @ApiUnauthorizedResponse({
    description: 'Authentication required — purchase is not available to guests',
  })
  purchase(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @Query('currency') currency?: string,
  ) {
    const cur =
      currency?.toUpperCase() === 'USD' ? Currency.USD : Currency.RUB;
    return this.purchases.createPurchase(req.user, id, cur);
  }

  @Get('profile/purchases')
  @ApiOperation({ summary: 'List user purchases' })
  list(@Req() req: Request & { user: User }) {
    return this.purchases.listUserPurchases(req.user.id);
  }

  @Get('purchases/:id/download')
  @ApiOperation({ summary: 'Download purchased script file' })
  async download(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @Res() res: Response,
  ) {
    await this.purchases.download(id, req.user.id, res);
  }
}
