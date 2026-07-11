import type { Request } from 'express';

export type UploadFileMeta = {
  present: boolean;
  fieldname?: string;
  originalname?: string;
  mimetype?: string;
  encoding?: string;
  size?: number;
  bufferLength?: number | null;
  hasBuffer?: boolean;
  hasPath?: boolean;
  path?: string;
};

export function formatUploadFileMeta(
  file?: Express.Multer.File | null,
): UploadFileMeta {
  if (!file) {
    return { present: false };
  }

  return {
    present: true,
    fieldname: file.fieldname,
    originalname: file.originalname,
    mimetype: file.mimetype,
    encoding: file.encoding,
    size: file.size,
    bufferLength: file.buffer?.length ?? null,
    hasBuffer: Boolean(file.buffer?.length),
    hasPath: Boolean(file.path),
    path: file.path,
  };
}

export function formatUploadRequestMeta(req: Request) {
  return {
    method: req.method,
    path: req.originalUrl ?? req.url,
    scriptId: req.params?.id,
    contentType: req.headers['content-type'],
    contentLength: req.headers['content-length'],
  };
}

export function formatUploadError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      status:
        'status' in error && typeof error.status === 'number'
          ? error.status
          : undefined,
      response:
        'response' in error && error.response
          ? String(error.response)
          : undefined,
    };
  }

  return { message: String(error) };
}
