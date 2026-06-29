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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const api_docs_1 = require("../common/swagger/api-docs");
const comment_dto_1 = require("./dto/comment.dto");
const comments_service_1 = require("./comments.service");
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
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.comments.list),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'shop-tycoon' }),
    (0, swagger_1.ApiOkResponse)({ type: comment_dto_1.CommentDto, isArray: true }),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('scripts/:slug/comments'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.comments.create),
    (0, swagger_1.ApiParam)({ name: 'slug', example: 'shop-tycoon' }),
    (0, swagger_1.ApiBody)({ type: comment_dto_1.CreateCommentDto }),
    (0, swagger_1.ApiOkResponse)({ type: comment_dto_1.CreateCommentResponseDto }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Steam login required' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_dto_1.CreateCommentDto, Object]),
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
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.comments.listPending),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, example: 'pending' }),
    (0, swagger_1.ApiOkResponse)({ type: comment_dto_1.PendingCommentDto, isArray: true }),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminCommentsController.prototype, "list", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)(api_docs_1.ApiDocs.comments.moderate),
    (0, swagger_1.ApiParam)({ name: 'id', format: 'uuid' }),
    (0, swagger_1.ApiBody)({ type: comment_dto_1.ModerateCommentDto }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, comment_dto_1.ModerateCommentDto, Object]),
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