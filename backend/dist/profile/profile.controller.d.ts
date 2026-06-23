import type { Request } from 'express';
import { User } from '../generated/prisma/client';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
export declare class ProfileController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    getMe(req: Request & {
        user: User;
    }): Promise<{
        achievements: import("../users/users.service").AchievementDto[];
        id: string;
        steamId: string;
        username: string;
        avatarUrl: string;
        balance: number;
        role: string;
        isBlocked: boolean;
        createdAt: Date;
    }>;
    getPublic(id: string): Promise<{
        achievements: import("../users/users.service").AchievementDto[];
        id: string;
        username: string;
        avatarUrl: string;
        createdAt: Date;
    }>;
}
