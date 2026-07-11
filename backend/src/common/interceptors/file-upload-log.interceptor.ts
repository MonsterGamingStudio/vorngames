import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import type { Request } from 'express';
import { catchError, tap, throwError } from 'rxjs';
import {
  formatUploadError,
  formatUploadFileMeta,
  formatUploadRequestMeta,
} from '../utils/upload-log.util';

@Injectable()
export class FileUploadLogInterceptor implements NestInterceptor {
  private readonly logger = new Logger('FileUpload');

  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest<Request & { file?: Express.Multer.File }>();
    const handler = context.getHandler().name;
    const startedAt = Date.now();
    const baseMeta = {
      handler,
      ...formatUploadRequestMeta(req),
      file: formatUploadFileMeta(req.file),
    };

    this.logger.log(`[start] ${JSON.stringify(baseMeta)}`);

    return next.handle().pipe(
      tap((result) => {
        this.logger.log(
          `[success] ${JSON.stringify({
            ...baseMeta,
            durationMs: Date.now() - startedAt,
            resultType: result == null ? 'null' : typeof result,
          })}`,
        );
      }),
      catchError((error: unknown) => {
        this.logger.error(
          `[error] ${JSON.stringify({
            ...baseMeta,
            durationMs: Date.now() - startedAt,
            error: formatUploadError(error),
          })}`,
        );
        return throwError(() => error);
      }),
    );
  }
}
