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
exports.AdminSyncService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_1 = require("../generated/prisma/client");
let AdminSyncService = class AdminSyncService {
    config;
    constructor(config) {
        this.config = config;
    }
    resolveRole(steamId) {
        const adminIds = this.config
            .get('STEAM_ADMIN_IDS', '')
            .split(',')
            .map((id) => id.trim())
            .filter(Boolean);
        return adminIds.includes(steamId) ? client_1.UserRole.admin : client_1.UserRole.user;
    }
};
exports.AdminSyncService = AdminSyncService;
exports.AdminSyncService = AdminSyncService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AdminSyncService);
//# sourceMappingURL=admin-sync.service.js.map