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
exports.OptionalJwtAuthGuard = exports.BlockedUserGuard = exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const utils_1 = require("../common/utils");
let AdminGuard = class AdminGuard {
    config;
    constructor(config) {
        this.config = config;
    }
    canActivate(context) {
        const req = context
            .switchToHttp()
            .getRequest();
        const user = req.user;
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const adminIds = this.config
            .get('STEAM_ADMIN_IDS', '')
            .split(',')
            .map((id) => id.trim())
            .filter(Boolean);
        const isAdmin = user.role === client_1.UserRole.admin || adminIds.includes(user.steamId);
        if (!isAdmin) {
            throw new common_1.ForbiddenException('Admin access required');
        }
        return true;
    }
};
exports.AdminGuard = AdminGuard;
exports.AdminGuard = AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AdminGuard);
let BlockedUserGuard = class BlockedUserGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const req = context
            .switchToHttp()
            .getRequest();
        const user = req.user;
        if (user?.isBlocked) {
            throw new common_1.ForbiddenException('Account is blocked');
        }
        const clientIp = (0, utils_1.getClientIp)(req);
        const blocked = await this.prisma.ipBlock.findUnique({
            where: { ip: clientIp },
        });
        if (blocked) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return true;
    }
};
exports.BlockedUserGuard = BlockedUserGuard;
exports.BlockedUserGuard = BlockedUserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BlockedUserGuard);
let OptionalJwtAuthGuard = class OptionalJwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        const result = super.canActivate(context);
        if (result instanceof Promise) {
            return result.catch(() => true);
        }
        return result;
    }
    handleRequest(_err, user) {
        return user ?? null;
    }
};
exports.OptionalJwtAuthGuard = OptionalJwtAuthGuard;
exports.OptionalJwtAuthGuard = OptionalJwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], OptionalJwtAuthGuard);
//# sourceMappingURL=guards.js.map