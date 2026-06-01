import { ConfigService } from '@nestjs/config';
import { User } from '../generated/prisma/client';
import { AuthService } from './auth.service';
declare const SteamStrategy_base: new (options: import("passport-steam").SteamStrategyOptions) => import("passport-steam")<import("passport-steam").SteamStrategyOptions> & {
    validate(...args: any[]): unknown;
};
export declare class SteamStrategy extends SteamStrategy_base {
    private readonly authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(_identifier: string, profile: {
        id: string;
        displayName?: string;
        photos?: Array<{
            value: string;
        }>;
    }): Promise<User>;
}
export {};
