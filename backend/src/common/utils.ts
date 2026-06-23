import { createHash } from 'crypto';

export function hashIp(ip: string): string {
  return createHash('sha256').update(ip).digest('hex');
}

export function getClientIp(req: {
  ip?: string;
  headers?: Record<string, string | string[] | undefined>;
}): string {
  const forwarded = req.headers?.['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0]?.trim() ?? 'unknown';
  }

  return req.ip ?? 'unknown';
}

export function parsePagination(query: {
  page?: string | number;
  limit?: string | number;
}): { page: number; limit: number; skip: number } {
  const page = Math.max(1, Number(query.page) || 1);
  const limit = Math.min(100, Math.max(1, Number(query.limit) || 20));
  return { page, limit, skip: (page - 1) * limit };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function generateTicketNumber(): string {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return `VG-${date}-${rand}`;
}
