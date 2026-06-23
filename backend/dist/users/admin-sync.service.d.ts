import { ConfigService } from '@nestjs/config';
import { UserRole } from '../generated/prisma/client';
export declare class AdminSyncService {
    private readonly config;
    constructor(config: ConfigService);
    resolveRole(steamId: string): UserRole;
}
