import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { GameCategoryDto, ScriptListItemDto } from '../../scripts/dto/script.dto';

export enum CurrencyDto {
  RUB = 'RUB',
  USD = 'USD',
}

export class CreatePurchaseQueryDto {
  @ApiPropertyOptional({ enum: CurrencyDto, default: CurrencyDto.RUB })
  @IsOptional()
  @IsEnum(CurrencyDto)
  currency?: CurrencyDto;
}

export class CreatePurchaseResponseDto {
  @ApiProperty({ example: 'https://unitpay.ru/pay/...' })
  payment_url!: string;

  @ApiProperty({ format: 'uuid', example: '550e8400-e29b-41d4-a716-446655440000' })
  payment_id!: string;
}

export class PurchaseScriptDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  slug!: string;

  @ApiProperty()
  title!: string;

  @ApiProperty()
  shortDescription!: string;

  @ApiProperty({ enum: GameCategoryDto })
  gameCategory!: GameCategoryDto;

  @ApiPropertyOptional()
  coverUrl?: string | null;

  @ApiProperty()
  priceRub!: number;

  @ApiProperty()
  priceUsd!: number;
}

export class PurchaseItemDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  purchasedAt!: Date;

  @ApiProperty({ example: 1500 })
  pricePaid!: number;

  @ApiProperty({ enum: CurrencyDto })
  currency!: CurrencyDto;

  @ApiProperty({
    example: true,
    description: 'True when a newer script version is available',
  })
  needsUpdate!: boolean;

  @ApiProperty({ type: PurchaseScriptDto })
  script!: PurchaseScriptDto;
}

export class GrantPurchaseDto {
  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  scriptId!: string;

  @ApiPropertyOptional({ enum: CurrencyDto })
  @IsOptional()
  @IsEnum(CurrencyDto)
  currency?: CurrencyDto;
}
