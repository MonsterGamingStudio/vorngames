import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { TebexLicenseStatus, TebexStore, User } from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiDocs } from '../common/swagger/api-docs';
import { getClientIp, parsePagination } from '../common/utils';
import {
  CreateTebexPackageMappingDto,
  TebexBuyResponseDto,
  TebexLicenseAdminDto,
  TebexLicensesQueryDto,
  TebexPackageMappingDto,
  TebexPackagesQueryDto,
  UpdateTebexLicenseDto,
  UpdateTebexPackageMappingDto,
} from './dto/tebex.dto';
import { TEBEX_SIGNATURE_HEADER } from './tebex.constants';
import { TebexService } from './tebex.service';

type RawBodyRequest = Request & { rawBody?: Buffer };

@ApiTags('tebex')
@Controller()
export class TebexController {
  constructor(private readonly tebex: TebexService) {}

  @Post('tebex/webhook')
  @ApiOperation(ApiDocs.tebex.webhook)
  @ApiHeader({
    name: TEBEX_SIGNATURE_HEADER,
    required: true,
    description: 'Tebex HMAC-SHA256 signature of the JSON body',
  })
  @ApiOkResponse({
    description: 'Validation webhook returns { id }, others return { ok: true }',
  })
  webhook(
    @Req() req: RawBodyRequest,
    @Headers(TEBEX_SIGNATURE_HEADER) signature: string | undefined,
  ) {
    const rawBody = req.rawBody;
    if (!rawBody) {
      throw new Error('Raw body is required for Tebex webhook signature verification');
    }

    const clientIp = this.resolveClientIp(req);
    return this.tebex.handleWebhook(rawBody, signature, clientIp);
  }

  @Post('scripts/:id/buy')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard)
  @ApiOperation(ApiDocs.tebex.buy)
  @ApiParam({ name: 'id', format: 'uuid', description: 'Script ID' })
  @ApiOkResponse({ type: TebexBuyResponseDto })
  @ApiUnauthorizedResponse({
    description: 'Authentication required — purchase is not available to guests',
  })
  buy(
    @Param('id') id: string,
    @Req() req: Request & { user: User },
  ) {
    return this.tebex.createBuyBasket(req.user, id, getClientIp(req));
  }

  @Get('admin/tebex-licenses')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminList)
  @ApiOkResponse({
    schema: {
      properties: {
        items: { type: 'array', items: { $ref: '#/components/schemas/TebexLicenseAdminDto' } },
        total: { type: 'number', example: 42 },
      },
    },
  })
  listLicenses(@Query() query: TebexLicensesQueryDto) {
    const pagination = parsePagination({
      page: query.page,
      limit: query.limit,
    });

    return this.tebex.listLicenses({
      search: query.search,
      status: query.status as TebexLicenseStatus | undefined,
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  @Patch('admin/tebex-licenses/:id')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminUpdate)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: TebexLicenseAdminDto })
  updateLicense(
    @Param('id') id: string,
    @Body() body: UpdateTebexLicenseDto,
  ) {
    return this.tebex.setLicenseActive(id, body.active);
  }

  @Get('admin/tebex-packages')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminPackagesList)
  listPackageMappings(@Query() query: TebexPackagesQueryDto) {
    const pagination = parsePagination({
      page: query.page,
      limit: query.limit,
    });

    return this.tebex.listPackageMappings({
      store: query.store as TebexStore | undefined,
      skip: pagination.skip,
      take: pagination.limit,
    });
  }

  @Post('admin/tebex-packages')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminPackagesCreate)
  @ApiOkResponse({ type: TebexPackageMappingDto })
  createPackageMapping(@Body() body: CreateTebexPackageMappingDto) {
    return this.tebex.createPackageMapping({
      store: body.store as TebexStore,
      packageId: body.packageId,
      packageName: body.packageName,
      scriptId: body.scriptId,
    });
  }

  @Patch('admin/tebex-packages/:id')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminPackagesUpdate)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: TebexPackageMappingDto })
  updatePackageMapping(
    @Param('id') id: string,
    @Body() body: UpdateTebexPackageMappingDto,
  ) {
    return this.tebex.updatePackageMapping(id, body);
  }

  @Delete('admin/tebex-packages/:id')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
  @ApiOperation(ApiDocs.tebex.adminPackagesDelete)
  @ApiParam({ name: 'id', format: 'uuid' })
  deletePackageMapping(@Param('id') id: string) {
    return this.tebex.deletePackageMapping(id);
  }

  private resolveClientIp(req: Request): string | undefined {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0]?.trim();
    }
    return req.ip;
  }
}
