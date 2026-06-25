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
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { Currency, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  CreatePurchaseQueryDto,
  CreatePurchaseResponseDto,
  PurchaseItemDto,
} from './dto/purchase.dto';
import { PurchasesService } from './purchases.service';

@ApiTags('purchases')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller()
@UseGuards(JwtAuthGuard, BlockedUserGuard)
export class PurchasesController {
  constructor(private readonly purchases: PurchasesService) {}

  @Post('scripts/:id/purchase')
  @ApiOperation({
    summary: 'Create script purchase payment',
    description:
      'Requires Steam login. Returns UnitPay payment URL. Guests receive 401.',
  })
  @ApiParam({ name: 'id', format: 'uuid', description: 'Script ID' })
  @ApiQuery({ name: 'currency', required: false, enum: ['RUB', 'USD'] })
  @ApiOkResponse({ type: CreatePurchaseResponseDto })
  @ApiUnauthorizedResponse({
    description: 'Authentication required — purchase is not available to guests',
  })
  purchase(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @Query() query: CreatePurchaseQueryDto,
  ) {
    const cur =
      query.currency?.toUpperCase() === 'USD' ? Currency.USD : Currency.RUB;
    return this.purchases.createPurchase(req.user, id, cur);
  }

  @Get('profile/purchases')
  @ApiOperation({ summary: 'List purchased scripts with needsUpdate flag' })
  @ApiOkResponse({ type: PurchaseItemDto, isArray: true })
  list(@Req() req: Request & { user: User }) {
    return this.purchases.listUserPurchases(req.user.id);
  }

  @Get('purchases/:id/download')
  @ApiOperation({
    summary: 'Download purchased script file',
    description: 'Streams the current version of the script archive',
  })
  @ApiParam({ name: 'id', format: 'uuid', description: 'Purchase ID' })
  async download(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @Res() res: Response,
  ) {
    await this.purchases.download(id, req.user.id, res);
  }
}
