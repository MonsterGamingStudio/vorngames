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
import { OkResponseDto } from '../common/dto/common.dto';
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
  @ApiOperation({ summary: 'List published scripts with search, filters and sort' })
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
  @ApiOperation({ summary: 'Random scripts for homepage (default 4)' })
  @ApiQuery({ name: 'count', required: false, example: 4 })
  @ApiOkResponse({ type: ScriptListItemWithMediaDto, isArray: true })
  getRandom(@Query('count') count?: string) {
    return this.scripts.getRandom(Number(count) || 4);
  }

  @Get('home/popular')
  @ApiOperation({ summary: 'Popular scripts by views in last 24 hours' })
  @ApiQuery({ name: 'limit', required: false, example: 8 })
  @ApiOkResponse({ type: ScriptListItemWithMediaDto, isArray: true })
  getPopular(@Query('limit') limit?: string) {
    return this.scripts.getPopular(Number(limit) || 8);
  }

  @Get(':slug')
  @ApiOperation({
    summary: 'Get script card by slug',
    description:
      'Optional auth via cookie: returns isAuthenticated, isPurchased, requiresAuthToPurchase',
  })
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
  @ApiOperation({ summary: 'Record script page view (analytics)' })
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: OkResponseDto })
  @UseGuards(OptionalJwtAuthGuard)
  recordView(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordView(id, req.user?.id ?? null, ipHash);
  }

  @Post(':id/click')
  @ApiOperation({ summary: 'Record buy button click (analytics)' })
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: OkResponseDto })
  @UseGuards(OptionalJwtAuthGuard)
  recordClick(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordClick(id, req.user?.id ?? null, ipHash);
  }
}
