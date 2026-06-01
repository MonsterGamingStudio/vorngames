"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    usersService;
    jwtService;
    config;
    constructor(usersService, jwtService, config) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.config = config;
    }
    async validateSteamProfile(profile) {
        const steamProfile = {
            steamId: profile.id,
            username: profile.displayName ?? 'Steam User',
            avatarUrl: profile.photos?.[2]?.value ??
                profile.photos?.[0]?.value ??
                'https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff25dc1cdfeb_full.jpg',
        };
        return this.usersService.upsertFromSteam(steamProfile);
    }
    signToken(user) {
        const payload = {
            sub: user.id,
            steamId: user.steamId,
        };
        return this.jwtService.sign(payload);
    }
    async getUserById(id) {
        return this.usersService.findById(id);
    }
    toUserResponse(user) {
        return {
            id: user.id,
            steamId: user.steamId,
            username: user.username,
            avatarUrl: user.avatarUrl,
            balance: users_service_1.UsersService.toBalanceNumber(user.balance),
        };
    }
    getFrontendUrl() {
        return this.config.getOrThrow('FRONTEND_URL');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map