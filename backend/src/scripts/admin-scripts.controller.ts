import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCookieAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  GameCategory,
  ScriptBadge,
  ScriptMediaType,
} from '../generated/prisma/client';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ScriptsService } from './scripts.service';

class CreateScriptBodyDto {
  title!: string;
  slug?: string;
  shortDescription!: string;
  gameCategory!: GameCategory;
  priceRub!: number;
  priceUsd!: number;
  discountPercent?: number;
  badge?: ScriptBadge;
  instructionHtml?: string;
  isPublished?: boolean;
  featuredOnHome?: boolean;
}

class AddMediaBodyDto {
  type!: ScriptMediaType;
  url!: string;
  sortOrder?: number;
}

@ApiTags('admin/scripts')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('admin/scripts')
@UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
export class AdminScriptsController {
  constructor(private readonly scripts: ScriptsService) {}

  @Get()
  @ApiOperation({ summary: 'List all scripts (admin)' })
  listAll() {
    return this.scripts.listAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create script' })
  create(@Body() body: CreateScriptBodyDto) {
    return this.scripts.create(body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update script' })
  update(@Param('id') id: string, @Body() body: CreateScriptBodyDto) {
    return this.scripts.update(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Unpublish script' })
  remove(@Param('id') id: string) {
    return this.scripts.unpublish(id);
  }

  @Post(':id/media')
  @ApiOperation({ summary: 'Add media URL or YouTube link' })
  addMedia(@Param('id') id: string, @Body() body: AddMediaBodyDto) {
    return this.scripts.addMedia(id, body);
  }

  @Post(':id/media/upload')
  @ApiOperation({ summary: 'Upload image' })
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('sortOrder') sortOrder?: string,
  ) {
    return this.scripts.uploadImage(id, file, Number(sortOrder) || 0);
  }

  @Post(':id/versions')
  @ApiOperation({ summary: 'Upload new script version' })
  @UseInterceptors(FileInterceptor('file'))
  uploadVersion(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('versionLabel') versionLabel: string,
  ) {
    return this.scripts.addVersion(id, file, versionLabel || '1.0');
  }

  @Get(':id/stats')
  @ApiOperation({ summary: 'Script statistics' })
  stats(
    @Param('id') id: string,
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.scripts.getStats(
      id,
      from ? new Date(from) : undefined,
      to ? new Date(to) : undefined,
    );
  }
}
