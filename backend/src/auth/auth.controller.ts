import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiCookieAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { User } from '../generated/prisma/client';
import { OkResponseDto } from '../common/dto/common.dto';
import { ApiDocs } from '../common/swagger/api-docs';
import { getClientIp } from '../common/utils';
import { JWT_COOKIE_NAME } from './auth.constants';
import { AuthService } from './auth.service';
import { UserResponseDto } from './dto/user-response.dto';
import { BlockedUserGuard } from './guards';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Get('steam')
  @ApiOperation(ApiDocs.auth.steamLogin)
  @ApiResponse({ status: 302, description: 'Redirect to Steam' })
  @UseGuards(AuthGuard('steam'))
  steamLogin() {
    return;
  }

  @Get('steam/callback')
  @ApiOperation(ApiDocs.auth.steamCallback)
  @ApiResponse({ status: 302, description: 'Redirect to frontend with auth cookie set' })
  @UseGuards(AuthGuard('steam'))
  steamCallback(@Req() req: Request & { user: User }, @Res() res: Response) {
    const token = this.authService.signToken(req.user);
    const isProduction = this.config.get('NODE_ENV') === 'production';

    res.cookie(JWT_COOKIE_NAME, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: isProduction,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect(this.authService.getFrontendUrl());
  }

  @Get('me')
  @ApiCookieAuth(JWT_COOKIE_NAME)
  @ApiOperation(ApiDocs.auth.me)
  @ApiResponse({ status: 200, type: UserResponseDto })
  @ApiUnauthorizedResponse({ description: 'Not authenticated' })
  @UseGuards(JwtAuthGuard, BlockedUserGuard)
  async getMe(
    @Req() req: Request & { user: User },
  ): Promise<UserResponseDto> {
    const user = await this.authService.getCurrentUser(
      req.user,
      getClientIp(req),
    );
    return this.authService.toUserResponse(user);
  }

  @Post('logout')
  @ApiOperation(ApiDocs.auth.logout)
  @ApiResponse({ status: 200, type: OkResponseDto })
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(JWT_COOKIE_NAME, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return { ok: true };
  }
}
