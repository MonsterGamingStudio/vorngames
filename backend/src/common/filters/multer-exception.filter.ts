import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { MulterError } from 'multer';
import type { Response } from 'express';

@Catch(MulterError)
export class MulterExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('FileUpload');

  catch(exception: MulterError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<{ method: string; url: string }>();

    this.logger.error(
      `[multer:error] ${JSON.stringify({
        method: request.method,
        path: request.url,
        code: exception.code,
        field: exception.field,
        message: exception.message,
      })}`,
    );

    const message =
      exception.code === 'LIMIT_FILE_SIZE'
        ? 'File exceeds maximum upload size'
        : exception.message;

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message,
      error: 'Bad Request',
    });
  }
}
