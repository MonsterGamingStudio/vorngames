import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export enum GameCategoryDto {
  gmod = 'gmod',
  fivem = 'fivem',
}

export enum ScriptBadgeDto {
  none = 'none',
  bestseller = 'bestseller',
  popular = 'popular',
  new = 'new',
  preorder = 'preorder',
}

export enum ScriptSortDto {
  price_asc = 'price_asc',
  price_desc = 'price_desc',
  popular = 'popular',
}

export enum ScriptMediaTypeDto {
  image = 'image',
  youtube = 'youtube',
}

export class ScriptListQueryDto {
  @ApiPropertyOptional({ example: 'tycoon' })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: GameCategoryDto })
  @IsOptional()
  @IsEnum(GameCategoryDto)
  gameCategory?: GameCategoryDto;

  @ApiPropertyOptional({ enum: ScriptSortDto })
  @IsOptional()
  @IsEnum(ScriptSortDto)
  sort?: ScriptSortDto;

  @ApiPropertyOptional({ example: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number;
}

export class ScriptListItemDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'shop-tycoon' })
  slug!: string;

  @ApiProperty({ example: 'Shop Tycoon' })
  title!: string;

  @ApiProperty({ example: 'Build your own supermarket' })
  shortDescription!: string;

  @ApiProperty({ enum: GameCategoryDto })
  gameCategory!: GameCategoryDto;

  @ApiProperty({ example: 1500 })
  priceRub!: number;

  @ApiProperty({ example: 20 })
  priceUsd!: number;

  @ApiPropertyOptional({ example: 10 })
  discountPercent?: number | null;

  @ApiProperty({ enum: ScriptBadgeDto })
  badge!: ScriptBadgeDto;

  @ApiPropertyOptional({ example: '/api/storage/local/scripts/cover.jpg' })
  coverUrl!: string | null;

  @ApiPropertyOptional()
  publishedAt?: Date | null;

  @ApiPropertyOptional()
  fileUpdatedAt?: Date | null;
}

export class ScriptListResponseDto {
  @ApiProperty({ type: [ScriptListItemDto] })
  items!: ScriptListItemDto[];

  @ApiProperty({ example: 42 })
  total!: number;

  @ApiProperty({ example: 1 })
  page!: number;

  @ApiProperty({ example: 20 })
  limit!: number;
}

export class ScriptMediaDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ enum: ScriptMediaTypeDto })
  type!: ScriptMediaTypeDto;

  @ApiProperty({ example: 0 })
  sortOrder!: number;

  @ApiProperty({ example: 'https://cdn.vorngames.com/scripts/1.jpg' })
  url!: string;
}

export class ScriptListItemWithMediaDto extends ScriptListItemDto {
  @ApiProperty({ type: [ScriptMediaDto] })
  media!: ScriptMediaDto[];
}

export class ScriptVersionSummaryDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: '1.2.0' })
  versionLabel!: string;

  @ApiProperty()
  releasedAt!: Date;
}

export class ScriptDetailDto extends ScriptListItemDto {
  @ApiProperty({ example: '<p>Instructions HTML</p>' })
  instructionHtml!: string;

  @ApiProperty({ type: [ScriptMediaDto] })
  media!: ScriptMediaDto[];

  @ApiProperty()
  createdAt!: Date;

  @ApiPropertyOptional({ type: ScriptVersionSummaryDto })
  currentVersion?: ScriptVersionSummaryDto | null;

  @ApiProperty({ example: false })
  isAuthenticated!: boolean;

  @ApiProperty({ example: false })
  isPurchased!: boolean;

  @ApiProperty({ example: true, description: 'Purchase always requires Steam login' })
  requiresAuthToPurchase!: boolean;
}

export class CreateScriptDto {
  @ApiProperty({ example: 'Shop Tycoon' })
  @IsString()
  title!: string;

  @ApiPropertyOptional({ example: 'shop-tycoon' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({ example: 'Build your own supermarket' })
  @IsString()
  shortDescription!: string;

  @ApiProperty({ enum: GameCategoryDto })
  @IsEnum(GameCategoryDto)
  gameCategory!: GameCategoryDto;

  @ApiProperty({ example: 1500 })
  @IsInt()
  @Min(0)
  priceRub!: number;

  @ApiProperty({ example: 20 })
  @IsInt()
  @Min(0)
  priceUsd!: number;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional()
  @IsInt()
  discountPercent?: number;

  @ApiPropertyOptional({ enum: ScriptBadgeDto })
  @IsOptional()
  @IsEnum(ScriptBadgeDto)
  badge?: ScriptBadgeDto;

  @ApiPropertyOptional({ example: '<p>How to install</p>' })
  @IsOptional()
  @IsString()
  instructionHtml?: string;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @ApiPropertyOptional({ example: false })
  @IsOptional()
  @IsBoolean()
  featuredOnHome?: boolean;
}

export class AddScriptMediaDto {
  @ApiProperty({ enum: ScriptMediaTypeDto })
  @IsEnum(ScriptMediaTypeDto)
  type!: ScriptMediaTypeDto;

  @ApiProperty({
    example: 'https://www.youtube.com/watch?v=abc',
    description: 'Image storage key or YouTube URL',
  })
  @IsString()
  url!: string;

  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @IsInt()
  sortOrder?: number;
}

export class ReorderScriptMediaItemDto {
  @ApiProperty({ format: 'uuid' })
  @IsString()
  id!: string;

  @ApiProperty({ example: 0 })
  @IsInt()
  sortOrder!: number;
}

export class ReorderScriptMediaDto {
  @ApiProperty({ type: [ReorderScriptMediaItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReorderScriptMediaItemDto)
  items!: ReorderScriptMediaItemDto[];
}

export class ScriptStatsDto {
  @ApiProperty({ example: 120 })
  views!: number;

  @ApiProperty({ example: 45 })
  clicks!: number;

  @ApiProperty({ example: 12 })
  purchases!: number;

  @ApiProperty({ example: 8 })
  comments!: number;
}

export class UploadImageBodyDto {
  @ApiPropertyOptional({ example: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  sortOrder?: number;
}

export class UploadVersionBodyDto {
  @ApiPropertyOptional({ example: '1.0.0' })
  @IsOptional()
  @IsString()
  versionLabel?: string;
}
