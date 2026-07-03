import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import { User } from '../generated/prisma/client';
import { AuthService } from './auth.service';
import { UserResponseDto } from './dto/user-response.dto';
import { TebexService } from '../tebex/tebex.service';
export declare class AuthController {
    private readonly authService;
    private readonly config;
    private readonly tebexService;
    constructor(authService: AuthService, config: ConfigService, tebexService: TebexService);
    steamLogin(): void;
    steamCallback(req: Request & {
        user: User;
    }, res: Response): Promise<void>;
    getMe(req: Request & {
        user: User;
    }): Promise<UserResponseDto>;
    logout(res: Response): {
        ok: boolean;
    };
}
