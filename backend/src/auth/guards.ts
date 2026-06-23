import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User, UserRole } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { getClientIp } from '../common/utils';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const req = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const user = req.user;

    if (!user) {
      throw new UnauthorizedException();
    }

    const adminIds = this.config
      .get<string>('STEAM_ADMIN_IDS', '')
      .split(',')
      .map((id) => id.trim())
      .filter(Boolean);

    const isAdmin =
      user.role === UserRole.admin || adminIds.includes(user.steamId);

    if (!isAdmin) {
      throw new ForbiddenException('Admin access required');
    }

    return true;
  }
}

@Injectable()
export class BlockedUserGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context
      .switchToHttp()
      .getRequest<Request & { user?: User }>();
    const user = req.user;

    if (user?.isBlocked) {
      throw new ForbiddenException('Account is blocked');
    }

    const clientIp = getClientIp(req);
    const blocked = await this.prisma.ipBlock.findUnique({
      where: { ip: clientIp },
    });

    if (blocked) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const result = super.canActivate(context);
    if (result instanceof Promise) {
      return result.catch(() => true);
    }
    return result;
  }

  handleRequest<TUser>(_err: Error | null, user: TUser): TUser | null {
    return user ?? null;
  }
}
