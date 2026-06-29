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
  ApiProduces,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { Currency, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiDocs } from '../common/swagger/api-docs';
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
  @ApiOperation(ApiDocs.purchases.create)
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
  @ApiOperation(ApiDocs.purchases.list)
  @ApiOkResponse({ type: PurchaseItemDto, isArray: true })
  list(@Req() req: Request & { user: User }) {
    return this.purchases.listUserPurchases(req.user.id);
  }

  @Get('purchases/:id/download')
  @ApiOperation(ApiDocs.purchases.download)
  @ApiParam({ name: 'id', format: 'uuid', description: 'Purchase ID' })
  @ApiProduces('application/octet-stream')
  async download(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
    @Res() res: Response,
  ) {
    await this.purchases.download(id, req.user.id, res);
  }
}
