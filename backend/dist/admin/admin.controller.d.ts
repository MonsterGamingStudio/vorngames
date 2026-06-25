import { Currency } from '../generated/prisma/client';
import { GrantPurchaseDto } from '../purchases/dto/purchase.dto';
import { PrismaService } from '../prisma/prisma.service';
import { PurchasesService } from '../purchases/purchases.service';
import { ScriptsService } from '../scripts/scripts.service';
import { UsersService } from '../users/users.service';
import { AdminDashboardDto, AdminUsersQueryDto, IpBlockDto, UpdateUserDto } from './dto/admin.dto';
export declare class AdminController {
    private readonly users;
    private readonly purchases;
    private readonly scripts;
    private readonly prisma;
    constructor(users: UsersService, purchases: PurchasesService, scripts: ScriptsService, prisma: PrismaService);
    listUsers(query: AdminUsersQueryDto): Promise<{
        items: {
            id: string;
            steamId: string;
            username: string;
            avatarUrl: string;
            balance: import("@prisma/client-runtime-utils").Decimal;
            role: import("../generated/prisma/enums").UserRole;
            isBlocked: boolean;
            blockedReason: string | null;
            lastLoginIp: string | null;
            lastLoginAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
    }>;
    updateUser(id: string, body: UpdateUserDto): import("../generated/prisma/models").Prisma__UserClient<{
        id: string;
        steamId: string;
        username: string;
        avatarUrl: string;
        balance: import("@prisma/client-runtime-utils").Decimal;
        role: import("../generated/prisma/enums").UserRole;
        isBlocked: boolean;
        blockedReason: string | null;
        lastLoginIp: string | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    grantPurchase(id: string, body: GrantPurchaseDto): Promise<{
        id: string;
        scriptId: string;
        userId: string;
        paymentId: string | null;
        pricePaid: number;
        currency: Currency;
        purchasedAt: Date;
        lastDownloadedVersionId: string | null;
        grantedByAdmin: boolean;
    }>;
    revokePurchase(purchaseId: string): Promise<{
        id: string;
        scriptId: string;
        userId: string;
        paymentId: string | null;
        pricePaid: number;
        currency: Currency;
        purchasedAt: Date;
        lastDownloadedVersionId: string | null;
        grantedByAdmin: boolean;
    }>;
    blockIp(body: IpBlockDto): Promise<{
        id: string;
        createdAt: Date;
        ip: string;
        reason: string | null;
        createdById: string | null;
    }>;
    unblockIp(ip: string): import("../generated/prisma/models").Prisma__IpBlockClient<{
        id: string;
        createdAt: Date;
        ip: string;
        reason: string | null;
        createdById: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    dashboard(): Promise<AdminDashboardDto>;
}
