import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/common.dto';

export class TebexLicensesQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'buyer@example.com' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: ['active', 'revoked'] })
  @IsOptional()
  @IsEnum(['active', 'revoked'])
  status?: 'active' | 'revoked';
}

export class UpdateTebexLicenseDto {
  @ApiProperty({ example: true, description: 'true = active, false = revoked' })
  @IsBoolean()
  active!: boolean;
}

export class TebexLicenseAdminDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'tbx-xxxxxxxx' })
  tebexTransactionId!: string;

  @ApiProperty({ enum: ['gmod', 'fivem'] })
  store!: string;

  @ApiProperty({ example: 'buyer@example.com' })
  customerEmail!: string;

  @ApiPropertyOptional({ example: 'PlayerOne' })
  customerUsername?: string | null;

  @ApiPropertyOptional({ example: '76561198000000000' })
  customerSteamId?: string | null;

  @ApiProperty({ example: 1234567 })
  packageId!: number;

  @ApiProperty({ example: 'VG Chat' })
  packageName!: string;

  @ApiProperty({ format: 'uuid' })
  scriptId!: string;

  @ApiProperty({ example: 'VG-A1B2-C3D4-E5F6-G7H8' })
  licenseKey!: string;

  @ApiProperty({ enum: ['active', 'revoked'] })
  status!: string;

  @ApiPropertyOptional({ format: 'uuid' })
  userId?: string | null;

  @ApiPropertyOptional({ format: 'uuid' })
  purchaseId?: string | null;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  purchasedAt!: Date;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  createdAt!: Date;
}

export class TebexPackagesQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ enum: ['gmod', 'fivem'] })
  @IsOptional()
  @IsEnum(['gmod', 'fivem'])
  store?: 'gmod' | 'fivem';
}

export class CreateTebexPackageMappingDto {
  @ApiProperty({ enum: ['gmod', 'fivem'], example: 'gmod' })
  @IsEnum(['gmod', 'fivem'])
  store!: 'gmod' | 'fivem';

  @ApiProperty({ example: 1234567, description: 'Tebex package ID' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  packageId!: number;

  @ApiPropertyOptional({ example: 'VG Chat' })
  @IsOptional()
  @IsString()
  packageName?: string;

  @ApiProperty({ format: 'uuid', description: 'Script ID in VornGames catalog' })
  @IsUUID()
  scriptId!: string;
}

export class UpdateTebexPackageMappingDto {
  @ApiPropertyOptional({ example: 1234567 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  packageId?: number;

  @ApiPropertyOptional({ example: 'VG Chat' })
  @IsOptional()
  @IsString()
  packageName?: string;

  @ApiPropertyOptional({ format: 'uuid' })
  @IsOptional()
  @IsUUID()
  scriptId?: string;
}

export class TebexPackageMappingDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ enum: ['gmod', 'fivem'] })
  store!: string;

  @ApiProperty({ example: 1234567 })
  packageId!: number;

  @ApiProperty({ example: 'VG Chat' })
  packageName!: string;

  @ApiProperty({ format: 'uuid' })
  scriptId!: string;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  createdAt!: Date;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  updatedAt!: Date;
}
