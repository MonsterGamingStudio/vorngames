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
exports.AdminSupportController = exports.SupportController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("../generated/prisma/client");
const auth_constants_1 = require("../auth/auth.constants");
const guards_1 = require("../auth/guards");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const support_service_1 = require("./support.service");
class CreateTicketDto {
    subject;
    body;
}
class AddMessageDto {
    body;
}
let SupportController = class SupportController {
    support;
    constructor(support) {
        this.support = support;
    }
    create(body, req) {
        return this.support.createTicket(req.user, body.subject, body.body);
    }
    list(req) {
        return this.support.listUserTickets(req.user.id);
    }
    get(number, req) {
        return this.support.getTicket(number, req.user.id, false);
    }
    addMessage(number, body, req) {
        return this.support.addMessage(number, req.user, body.body, false);
    }
};
exports.SupportController = SupportController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create support ticket' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTicketDto, Object]),
    __metadata("design:returntype", void 0)
], SupportController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List own tickets' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SupportController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':number'),
    (0, swagger_1.ApiOperation)({ summary: 'Get ticket with messages' }),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SupportController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(':number/messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Add message to ticket' }),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AddMessageDto, Object]),
    __metadata("design:returntype", void 0)
], SupportController.prototype, "addMessage", null);
exports.SupportController = SupportController = __decorate([
    (0, swagger_1.ApiTags)('support'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('support/tickets'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard),
    __metadata("design:paramtypes", [support_service_1.SupportService])
], SupportController);
let AdminSupportController = class AdminSupportController {
    support;
    constructor(support) {
        this.support = support;
    }
    list(status) {
        return this.support.listAllTickets(status);
    }
    get(number, req) {
        return this.support.getTicket(number, req.user.id, true);
    }
    reply(number, body, req) {
        return this.support.addMessage(number, req.user, body.body, true);
    }
    close(number) {
        return this.support.closeTicket(number);
    }
};
exports.AdminSupportController = AdminSupportController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List all support tickets' }),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminSupportController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':number'),
    (0, swagger_1.ApiOperation)({ summary: 'Get ticket (admin)' }),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AdminSupportController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(':number/messages'),
    (0, swagger_1.ApiOperation)({ summary: 'Reply to ticket' }),
    __param(0, (0, common_1.Param)('number')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AddMessageDto, Object]),
    __metadata("design:returntype", void 0)
], AdminSupportController.prototype, "reply", null);
__decorate([
    (0, common_1.Patch)(':number/close'),
    (0, swagger_1.ApiOperation)({ summary: 'Close ticket' }),
    __param(0, (0, common_1.Param)('number')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminSupportController.prototype, "close", null);
exports.AdminSupportController = AdminSupportController = __decorate([
    (0, swagger_1.ApiTags)('admin/support'),
    (0, swagger_1.ApiCookieAuth)(auth_constants_1.JWT_COOKIE_NAME),
    (0, common_1.Controller)('admin/support/tickets'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, guards_1.BlockedUserGuard, guards_1.AdminGuard),
    __metadata("design:paramtypes", [support_service_1.SupportService])
], AdminSupportController);
//# sourceMappingURL=support.controller.js.map