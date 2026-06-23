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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
const scripts_service_1 = require("../scripts/scripts.service");
let CommentsService = class CommentsService {
    prisma;
    notifications;
    scripts;
    constructor(prisma, notifications, scripts) {
        this.prisma = prisma;
        this.notifications = notifications;
        this.scripts = scripts;
    }
    async listApproved(slug) {
        const script = await this.scripts.findBySlug(slug);
        const comments = await this.prisma.comment.findMany({
            where: { scriptId: script.id, status: client_1.CommentStatus.approved },
            orderBy: { createdAt: 'desc' },
            include: {
                user: { select: { id: true, username: true, avatarUrl: true } },
            },
        });
        return comments.map((c) => ({
            id: c.id,
            text: c.text,
            createdAt: c.createdAt,
            author: c.user,
        }));
    }
    async create(user, slug, text) {
        const trimmed = text.trim();
        if (trimmed.length < 2) {
            throw new common_1.BadRequestException('Comment is too short');
        }
        const script = await this.scripts.findBySlug(slug);
        const comment = await this.prisma.comment.create({
            data: {
                scriptId: script.id,
                userId: user.id,
                text: trimmed,
                status: client_1.CommentStatus.pending,
            },
        });
        await this.notifications.create({
            userId: user.id,
            type: 'comment_submitted',
            title: 'Комментарий отправлен',
            body: 'Ваш комментарий отправлен на модерацию и будет опубликован после одобрения',
            payload: { commentId: comment.id, scriptId: script.id },
        });
        return {
            id: comment.id,
            message: 'Комментарий отправлен на модерацию и будет опубликован после одобрения администрацией',
        };
    }
    async listPending() {
        return this.prisma.comment.findMany({
            where: { status: client_1.CommentStatus.pending },
            orderBy: { createdAt: 'asc' },
            include: {
                user: { select: { id: true, username: true, avatarUrl: true } },
                script: { select: { id: true, title: true, slug: true } },
            },
        });
    }
    async moderate(commentId, moderatorId, status) {
        const comment = await this.prisma.comment.findUnique({
            where: { id: commentId },
        });
        if (!comment) {
            throw new common_1.NotFoundException('Comment not found');
        }
        if (comment.status !== client_1.CommentStatus.pending) {
            throw new common_1.BadRequestException('Comment already moderated');
        }
        const commentStatus = status === 'approved'
            ? client_1.CommentStatus.approved
            : client_1.CommentStatus.rejected;
        const updated = await this.prisma.comment.update({
            where: { id: commentId },
            data: {
                status: commentStatus,
                moderatedAt: new Date(),
                moderatedById: moderatorId,
            },
        });
        if (commentStatus === client_1.CommentStatus.approved) {
            await this.notifications.create({
                userId: comment.userId,
                type: 'comment_approved',
                title: 'Комментарий одобрен',
                body: 'Ваш комментарий прошёл модерацию и опубликован',
                payload: { commentId: comment.id, scriptId: comment.scriptId },
            });
        }
        return updated;
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService,
        scripts_service_1.ScriptsService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map