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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const utils_1 = require("../common/utils");
const auth_constants_1 = require("./auth.constants");
const auth_service_1 = require("./auth.service");
const user_response_dto_1 = require("./dto/user-response.dto");
const guards_1 = require("./guards");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
let AuthController = class AuthController {
    authService;
    config;
    constructor(authService, config) {
        this.authService = authService;
        this.config = config;
    }
    steamLogin() {
        return;
    }
    steamCallback(req, res) {
        const token = this.authService.signToken(req.user);
        const isProduction = this.config.get('NODE_ENV') === 'production';
        res.cookie(auth_constants_1.JWT_COOKIE_NAME, token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: isProduction,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        res.redirect(this.authService.getFrontendUrl());
    }
    async getMe(req) {
        const user = await this.authService.getCurrentUser(req.user, (0, utils_1.getClientIp)(req));
        return this.authService.toUserResponse(user);
    }
    logout(res) {
        res.clearCookie(auth_constants_1.JWT_COOKIE_NAME, {
            httpOnly: true,
            sameSite: 'lax',
        });
        return { ok: true };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('steam'),
    (0, swagger_1.ApiOperation)({ summary: 'Redirect to Steam OpenID login' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('steam')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "steamLogin", null);
__decorate([
    (0, common_1.Get)('steam/callback'),
    (0, swagger_1.ApiOperation)({ summary: 'Steam OpenID callback' }),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('steam')),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "steamCallback", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, swagger_1.ApiOperation)({ summary: 'Get current authenticated user' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_response_dto_1.UserResponseDto }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Not authenticated' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Clear auth cookie' }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map