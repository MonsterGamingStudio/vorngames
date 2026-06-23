import { Prisma, User, UserRole } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AdminSyncService } from './admin-sync.service';
export type SteamProfileInput = {
    steamId: string;
    username: string;
    avatarUrl: string;
};
export type AchievementDto = {
    id: string;
    title: string;
    description: string;
    unlocked: boolean;
    color: string;
};
export declare class UsersService {
    private readonly prisma;
    private readonly adminSync;
    constructor(prisma: PrismaService, adminSync: AdminSyncService);
    findById(id: string): Promise<User | null>;
    findBySteamId(steamId: string): Promise<User | null>;
    upsertFromSteam(profile: SteamProfileInput, loginIp?: string): Promise<User>;
    recordLogin(userId: string, ip?: string): Promise<User>;
    refreshSteamProfile(user: User): Promise<User>;
    getAchievements(userId: string): Promise<AchievementDto[]>;
    listUsers(options: {
        search?: string;
        skip: number;
        take: number;
    }): Promise<{
        items: {
            id: string;
            steamId: string;
            username: string;
            avatarUrl: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
            role: UserRole;
            isBlocked: boolean;
            blockedReason: string | null;
            lastLoginIp: string | null;
            lastLoginAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    updateUser(userId: string, data: {
        isBlocked?: boolean;
        blockedReason?: string | null;
        role?: UserRole;
    }): Prisma.Prisma__UserClient<{
        id: string;
        steamId: string;
        username: string;
        avatarUrl: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        role: UserRole;
        isBlocked: boolean;
        blockedReason: string | null;
        lastLoginIp: string | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    static toBalanceNumber(balance: Prisma.Decimal): number;
    static formatPublicUser(user: User): {
        id: string;
        username: string;
        avatarUrl: string;
        createdAt: Date;
    };
}
