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
exports.AdminCommentsController = exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const comments_service_1 = require("./comments.service");
class CreateCommentDto {
    text;
}
class ModerateCommentDto {
    status;
}
let CommentsController = class CommentsController {
    comments;
    constructor(comments) {
        this.comments = comments;
    }
    list(slug) {
        return this.comments.listApproved(slug);
    }
    create(slug, body, req) {
        return this.comments.create(req.user, slug, body.text);
    }
};
exports.CommentsController = CommentsController;
__decorate([
    (0, common_1.Get)('scripts/:slug/comments'),
    (0, swagger_1.ApiOperation)({ summary: 'List approved comments' }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('scripts/:slug/comments'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, swagger_1.ApiOperation)({ summary: 'Create comment (pending moderation)' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CreateCommentDto, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "create", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('comments'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
let AdminCommentsController = class AdminCommentsController {
    comments;
    constructor(comments) {
        this.comments = comments;
    }
    list(status) {
        if (status === 'pending' || !status) {
            return this.comments.listPending();
        }
        return [];
    }
    moderate(id, body, req) {
        const status = body.status === 'approved'
            ? client_1.CommentStatus.approved
            : client_1.CommentStatus.rejected;
        return this.comments.moderate(id, req.user.id, status);
    }
};
exports.AdminCommentsController = AdminCommentsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List comments for moderation' }),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminCommentsController.prototype, "list", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve or reject comment' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ModerateCommentDto, Object]),
    __metadata("design:returntype", void 0)
], AdminCommentsController.prototype, "moderate", null);
exports.AdminCommentsController = AdminCommentsController = __decorate([
    (0, swagger_1.ApiTags)('admin/comments'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('admin/comments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard, guards_1.AdminGuard),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], AdminCommentsController);
//# sourceMappingURL=comments.controller.js.map