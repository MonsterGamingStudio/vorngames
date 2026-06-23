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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const admin_sync_service_1 = require("./admin-sync.service");
const ACHIEVEMENTS = [
    {
        id: 'top_commentator',
        title: 'Топ комментатор',
        description: '15 комментариев под разными скриптами',
        color: 'orange',
        check: async (prisma, userId) => {
            const groups = await prisma.comment.groupBy({
                by: ['scriptId'],
                where: { userId, status: 'approved' },
            });
            return groups.length >= 15;
        },
    },
    {
        id: 'active_buyer',
        title: 'Активный покупатель',
        description: '10 покупок',
        color: 'green',
        check: async (prisma, userId) => {
            const count = await prisma.purchase.count({ where: { userId } });
            return count >= 10;
        },
    },
    {
        id: 'sandbox_lover',
        title: 'Любитель песочниц',
        description: '1 покупка в категории gmod',
        color: 'purple',
        check: async (prisma, userId) => {
            const count = await prisma.purchase.count({
                where: {
                    userId,
                    script: { gameCategory: client_1.GameCategory.gmod },
                },
            });
            return count >= 1;
        },
    },
];
let UsersService = class UsersService {
    prisma;
    adminSync;
    constructor(prisma, adminSync) {
        this.prisma = prisma;
        this.adminSync = adminSync;
    }
    findById(id) {
        return this.prisma.user.findUnique({ where: { id } });
    }
    findBySteamId(steamId) {
        return this.prisma.user.findUnique({ where: { steamId } });
    }
    async upsertFromSteam(profile, loginIp) {
        const role = this.adminSync.resolveRole(profile.steamId);
        return this.prisma.user.upsert({
            where: { steamId: profile.steamId },
            create: {
                steamId: profile.steamId,
                username: profile.username,
                avatarUrl: profile.avatarUrl,
                role,
                lastLoginIp: loginIp,
                lastLoginAt: new Date(),
            },
            update: {
                username: profile.username,
                avatarUrl: profile.avatarUrl,
                role,
                lastLoginIp: loginIp,
                lastLoginAt: new Date(),
            },
        });
    }
    async recordLogin(userId, ip) {
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                lastLoginIp: ip,
                lastLoginAt: new Date(),
                role: undefined,
            },
        });
    }
    async refreshSteamProfile(user) {
        const role = this.adminSync.resolveRole(user.steamId);
        if (user.role !== role) {
            return this.prisma.user.update({
                where: { id: user.id },
                data: { role },
            });
        }
        return user;
    }
    async getAchievements(userId) {
        return Promise.all(ACHIEVEMENTS.map(async (achievement) => ({
            id: achievement.id,
            title: achievement.title,
            description: achievement.description,
            color: achievement.color,
            unlocked: await achievement.check(this.prisma, userId),
        })));
    }
    async listUsers(options) {
        const where = {};
        if (options.search) {
            where.OR = [
                { username: { contains: options.search, mode: 'insensitive' } },
                { steamId: { contains: options.search } },
            ];
        }
        const [items, total] = await Promise.all([
            this.prisma.user.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: options.skip,
                take: options.take,
            }),
            this.prisma.user.count({ where }),
        ]);
        return { items, total };
    }
    updateUser(userId, data) {
        return this.prisma.user.update({
            where: { id: userId },
            data,
        });
    }
    static toBalanceNumber(balance) {
        return balance.toNumber();
    }
    static formatPublicUser(user) {
        return {
            id: user.id,
            username: user.username,
            avatarUrl: user.avatarUrl,
            createdAt: user.createdAt,
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        admin_sync_service_1.AdminSyncService])
], UsersService);
//# sourceMappingURL=users.service.js.map