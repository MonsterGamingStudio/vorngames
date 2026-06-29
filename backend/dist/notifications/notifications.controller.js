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
exports.NotificationsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const common_dto_1 = require("../common/dto/common.dto");
const api_docs_1 = require("../common/swagger/api-docs");
const utils_1 = require("../common/utils");
const notification_dto_1 = require("./dto/notification.dto");
const notifications_service_1 = require("./notifications.service");
let NotificationsController = class NotificationsController {
    notifications;
    constructor(notifications) {
        this.notifications = notifications;
    }
    async list(req, query) {
        const pagination = (0, utils_1.parsePagination)({
            page: query.page,
            limit: query.limit,
        });
        const items = await this.notifications.list(req.user.id, {
            unreadOnly: query.unreadOnly === 'true',
            skip: pagination.skip,
            take: pagination.limit,
        });
        return { items, page: pagination.page, limit: pagination.limit };
    }
    async unreadCount(req) {
        const count = await this.notifications.countUnread(req.user.id);
        return { count };
    }
    async markRead(req, query) {
        const idList = query.ids?.split(',').filter(Boolean);
        await this.notifications.markRead(req.user.id, idList);
        return { ok: true };
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.notifications.list),
    (0, swagger_1.ApiOkResponse)({ type: notification_dto_1.NotificationListResponseDto }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, notification_dto_1.NotificationListQueryDto]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.notifications.unreadCount),
    (0, swagger_1.ApiOkResponse)({ type: common_dto_1.CountResponseDto }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "unreadCount", null);
__decorate([
    (0, common_1.Patch)('read'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.notifications.markRead),
    (0, swagger_1.ApiQuery)({ name: 'ids', required: false, description: 'Comma-separated UUIDs' }),
    (0, swagger_1.ApiOkResponse)({ type: common_dto_1.OkResponseDto }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, notification_dto_1.MarkNotificationsReadQueryDto]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "markRead", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, swagger_1.ApiTags)('notifications'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('notifications'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map