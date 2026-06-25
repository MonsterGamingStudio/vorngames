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
exports.UserResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
class UserResponseDto {
    id;
    steamId;
    username;
    avatarUrl;
    balance;
    role;
    isBlocked;
    createdAt;
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, steamId: { required: true, type: () => String }, username: { required: true, type: () => String }, avatarUrl: { required: true, type: () => String }, balance: { required: true, type: () => Number }, role: { required: true, type: () => String }, isBlocked: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date } };
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ format: 'uuid' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '76561198000000000' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "steamId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'PlayerOne' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://avatars.steamstatic.com/abc_full.jpg' }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "avatarUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0, description: 'Balance in RUB' }),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user', enum: ['user', 'admin'] }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UserResponseDto.prototype, "isBlocked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-15T12:00:00.000Z' }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "createdAt", void 0);
//# sourceMappingURL=user-response.dto.js.map