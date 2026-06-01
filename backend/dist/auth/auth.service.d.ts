import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '../generated/prisma/client';
import { UserResponseDto } from './dto/user-response.dto';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly config;
    constructor(usersService: UsersService, jwtService: JwtService, config: ConfigService);
    validateSteamProfile(profile: {
        id: string;
        displayName?: string;
        photos?: Array<{
            value: string;
        }>;
    }): Promise<User>;
    signToken(user: User): string;
    getUserById(id: string): Promise<User | null>;
    toUserResponse(user: User): UserResponseDto;
    getFrontendUrl(): string;
}
