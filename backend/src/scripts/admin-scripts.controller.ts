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
import {
  ApiBody,
  ApiConsumes,
  ApiCookieAuth,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { OkResponseDto } from '../common/dto/common.dto';
import { ApiDocs } from '../common/swagger/api-docs';
import { JWT_COOKIE_NAME } from '../auth/auth.constants';
import { AdminGuard, BlockedUserGuard } from '../auth/guards';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import {
  AddScriptMediaDto,
  CreateScriptDto,
  ReorderScriptMediaDto,
  ScriptMediaDto,
  ScriptStatsDto,
  UploadImageBodyDto,
  UploadVersionBodyDto,
} from './dto/script.dto';
import { ScriptsService } from './scripts.service';

@ApiTags('admin/scripts')
@ApiCookieAuth(JWT_COOKIE_NAME)
@Controller('admin/scripts')
@UseGuards(JwtAuthGuard, BlockedUserGuard, AdminGuard)
export class AdminScriptsController {
  constructor(private readonly scripts: ScriptsService) {}

  @Get()
  @ApiOperation(ApiDocs.adminScripts.listAll)
  listAll() {
    return this.scripts.listAll();
  }

  @Post()
  @ApiOperation(ApiDocs.adminScripts.create)
  @ApiBody({ type: CreateScriptDto })
  create(@Body() body: CreateScriptDto) {
    return this.scripts.create(body);
  }

  @Patch(':id')
  @ApiOperation(ApiDocs.adminScripts.update)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiBody({ type: CreateScriptDto })
  update(@Param('id') id: string, @Body() body: CreateScriptDto) {
    return this.scripts.update(id, body);
  }

  @Delete(':id')
  @ApiOperation(ApiDocs.adminScripts.unpublish)
  @ApiParam({ name: 'id', format: 'uuid' })
  remove(@Param('id') id: string) {
    return this.scripts.unpublish(id);
  }

  @Post(':id/media')
  @ApiOperation(ApiDocs.adminScripts.addMedia)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiBody({ type: AddScriptMediaDto })
  @ApiOkResponse({ type: ScriptMediaDto })
  addMedia(@Param('id') id: string, @Body() body: AddScriptMediaDto) {
    return this.scripts.addMedia(id, body);
  }

  @Post(':id/media/upload')
  @ApiOperation(ApiDocs.adminScripts.uploadImage)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: {
        file: { type: 'string', format: 'binary' },
        sortOrder: { type: 'number', example: 0 },
      },
    },
  })
  @ApiOkResponse({ type: ScriptMediaDto })
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UploadImageBodyDto,
  ) {
    return this.scripts.uploadImage(id, file, body.sortOrder ?? 0);
  }

  @Get(':id/media')
  @ApiOperation(ApiDocs.adminScripts.listMedia)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiOkResponse({ type: ScriptMediaDto, isArray: true })
  listMedia(@Param('id') id: string) {
    return this.scripts.listMedia(id);
  }

  @Patch(':id/media/reorder')
  @ApiOperation(ApiDocs.adminScripts.reorderMedia)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiBody({ type: ReorderScriptMediaDto })
  @ApiOkResponse({ type: ScriptMediaDto, isArray: true })
  reorderMedia(@Param('id') id: string, @Body() body: ReorderScriptMediaDto) {
    return this.scripts.reorderMedia(id, body.items);
  }

  @Delete(':id/media/:mediaId')
  @ApiOperation(ApiDocs.adminScripts.removeMedia)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiParam({ name: 'mediaId', format: 'uuid' })
  @ApiOkResponse({ type: OkResponseDto })
  removeMedia(@Param('id') id: string, @Param('mediaId') mediaId: string) {
    return this.scripts.removeMedia(id, mediaId);
  }

  @Post(':id/versions')
  @ApiOperation(ApiDocs.adminScripts.uploadVersion)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      required: ['file'],
      properties: {
        file: { type: 'string', format: 'binary', description: 'zip/rar archive' },
        versionLabel: { type: 'string', example: '1.2.0' },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadVersion(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UploadVersionBodyDto,
  ) {
    return this.scripts.addVersion(id, file, body.versionLabel || '1.0');
  }

  @Get(':id/stats')
  @ApiOperation(ApiDocs.adminScripts.stats)
  @ApiParam({ name: 'id', format: 'uuid' })
  @ApiQuery({ name: 'from', required: false, example: '2026-01-01' })
  @ApiQuery({ name: 'to', required: false, example: '2026-12-31' })
  @ApiOkResponse({ type: ScriptStatsDto })
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
