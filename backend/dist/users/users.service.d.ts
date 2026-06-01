import { Prisma, User } from '../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export type SteamProfileInput = {
    steamId: string;
    username: string;
    avatarUrl: string;
};
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findById(id: string): Promise<User | null>;
    upsertFromSteam(profile: SteamProfileInput): Promise<User>;
    static toBalanceNumber(balance: Prisma.Decimal): number;
}
