import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { OptionalJwtAuthGuard } from '../auth/guards';
import { AnalyticsRecordResponseDto } from '../common/dto/common.dto';
import { ApiDocs } from '../common/swagger/api-docs';
import { getClientIp, hashIp, parsePagination } from '../common/utils';
import {
  ScriptDetailDto,
  ScriptListItemWithMediaDto,
  ScriptListQueryDto,
  ScriptListResponseDto,
} from './dto/script.dto';
import { ScriptsService } from './scripts.service';

@ApiTags('scripts')
@Controller('scripts')
export class ScriptsController {
  constructor(private readonly scripts: ScriptsService) {}

  @Get()
  @ApiOperation(ApiDocs.scripts.list)
  @ApiOkResponse({ type: ScriptListResponseDto })
  list(@Query() query: ScriptListQueryDto) {
    const pagination = parsePagination({
      page: query.page,
      limit: query.limit,
    });
    return this.scripts.list({
      search: query.search,
      gameCategory: query.gameCategory,
      sort: query.sort,
      page: pagination.page,
      limit: pagination.limit,
    });
  }

  @Get('home/random')
  @ApiOperation(ApiDocs.scripts.random)
  @ApiQuery({ name: 'count', required: false, example: 4 })
  @ApiOkResponse({ type: ScriptListItemWithMediaDto, isArray: true })
  getRandom(@Query('count') count?: string) {
    return this.scripts.getRandom(Number(count) || 4);
  }

  @Get('home/popular')
  @ApiOperation(ApiDocs.scripts.popular)
  @ApiQuery({ name: 'limit', required: false, example: 8 })
  @ApiOkResponse({ type: ScriptListItemWithMediaDto, isArray: true })
  getPopular(@Query('limit') limit?: string) {
    return this.scripts.getPopular(Number(limit) || 8);
  }

  @Get(':slug')
  @ApiOperation(ApiDocs.scripts.bySlug)
  @ApiParam({ name: 'slug', example: 'shop-tycoon' })
  @ApiOkResponse({ type: ScriptDetailDto })
  @UseGuards(OptionalJwtAuthGuard)
  async getBySlug(
    @Param('slug') slug: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const script = await this.scripts.findBySlug(slug);
    const detail = this.scripts.toDetail(script, req.user?.id);
    return this.scripts.enrichDetailWithPurchase(detail, req.user?.id);
  }

  @Post(':id/view')
  @ApiOperation(ApiDocs.scripts.recordView)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: AnalyticsRecordResponseDto })
  @UseGuards(OptionalJwtAuthGuard)
  recordView(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordView(id, req.user?.id ?? null, ipHash);
  }

  @Post(':id/click')
  @ApiOperation(ApiDocs.scripts.recordClick)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: AnalyticsRecordResponseDto })
  @UseGuards(OptionalJwtAuthGuard)
  recordClick(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordClick(id, req.user?.id ?? null, ipHash);
  }
}
