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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { GameCategory, User } from '../generated/prisma/client';
import { OptionalJwtAuthGuard } from '../auth/guards';
import { getClientIp, hashIp, parsePagination } from '../common/utils';
import { ScriptsService } from './scripts.service';

@ApiTags('scripts')
@Controller('scripts')
export class ScriptsController {
  constructor(private readonly scripts: ScriptsService) {}

  @Get()
  @ApiOperation({ summary: 'List published scripts' })
  list(
    @Query('search') search?: string,
    @Query('gameCategory') gameCategory?: GameCategory,
    @Query('sort') sort?: 'price_asc' | 'price_desc' | 'popular',
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pagination = parsePagination({ page, limit });
    return this.scripts.list({
      search,
      gameCategory,
      sort,
      page: pagination.page,
      limit: pagination.limit,
    });
  }

  @Get('home/random')
  @ApiOperation({ summary: 'Random scripts for homepage' })
  getRandom(@Query('count') count?: string) {
    return this.scripts.getRandom(Number(count) || 4);
  }

  @Get('home/popular')
  @ApiOperation({ summary: 'Popular scripts in last 24h' })
  getPopular(@Query('limit') limit?: string) {
    return this.scripts.getPopular(Number(limit) || 8);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get script by slug' })
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
  @ApiOperation({ summary: 'Record script view' })
  @UseGuards(OptionalJwtAuthGuard)
  recordView(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordView(id, req.user?.id ?? null, ipHash);
  }

  @Post(':id/click')
  @ApiOperation({ summary: 'Record buy button click' })
  @UseGuards(OptionalJwtAuthGuard)
  recordClick(
    @Param('id') id: string,
    @Req() req: Request & { user?: User | null },
  ) {
    const ipHash = hashIp(getClientIp(req));
    return this.scripts.recordClick(id, req.user?.id ?? null, ipHash);
  }
}
