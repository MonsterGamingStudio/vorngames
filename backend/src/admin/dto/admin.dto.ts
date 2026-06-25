import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/common.dto';

export enum UserRoleDto {
  user = 'user',
  admin = 'admin',
}

export class AdminUsersQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'player' })
  @IsOptional()
  @IsString()
  search?: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isBlocked?: boolean;

  @ApiPropertyOptional({ example: 'Spam in comments' })
  @IsOptional()
  @IsString()
  blockedReason?: string;

  @ApiPropertyOptional({ enum: UserRoleDto })
  @IsOptional()
  @IsEnum(UserRoleDto)
  role?: UserRoleDto;
}

export class IpBlockDto {
  @ApiProperty({ example: '203.0.113.10' })
  @IsString()
  ip!: string;

  @ApiPropertyOptional({ example: 'Abuse' })
  @IsOptional()
  @IsString()
  reason?: string;
}

export class AdminDashboardDto {
  @ApiProperty({ example: 150 })
  users!: number;

  @ApiProperty({ example: 24 })
  scripts!: number;

  @ApiProperty({ example: 89 })
  purchases!: number;

  @ApiProperty({ example: 3 })
  openTickets!: number;

  @ApiProperty({ example: 5 })
  pendingComments!: number;
}
