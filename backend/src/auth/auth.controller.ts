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
import { JWT_COOKIE_NAME } from './auth.constants';
import { AuthService } from './auth.service';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {}

  @Get('steam')
  @ApiOperation({ summary: 'Redirect to Steam OpenID login' })
  @UseGuards(AuthGuard('steam'))
  steamLogin() {
    return;
  }

  @Get('steam/callback')
  @ApiOperation({ summary: 'Steam OpenID callback' })
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
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiResponse({ status: 200, type: UserResponseDto })
  @ApiUnauthorizedResponse({ description: 'Not authenticated' })
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req: Request & { user: User }): UserResponseDto {
    return this.authService.toUserResponse(req.user);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Clear auth cookie' })
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(JWT_COOKIE_NAME, {
      httpOnly: true,
      sameSite: 'lax',
    });

    return { ok: true };
  }
}
