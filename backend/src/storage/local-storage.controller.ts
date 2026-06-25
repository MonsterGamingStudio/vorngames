import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiExcludeController } from '@nestjs/swagger';
import type { Response } from 'express';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

@ApiExcludeController()
@Controller('storage/local')
export class LocalStorageController {
  constructor(private readonly config: ConfigService) {}

  @Get('*key')
  serve(@Param('key') key: string, @Res() res: Response) {
    const normalizedKey = key.replace(/^\//, '');
    const uploadDir = this.config.get<string>('UPLOAD_DIR', './uploads');
    const filePath = join(uploadDir, normalizedKey);

    if (!existsSync(filePath)) {
      throw new NotFoundException();
    }

    createReadStream(filePath).pipe(res);
  }
}
