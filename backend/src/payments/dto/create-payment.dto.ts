import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
} from 'class-validator';
import { SUPPORTED_GAMES } from '../payments.constants';

export class CreatePaymentDto {
  @ApiProperty({ example: 'shop_tycoon' })
  @IsString()
  @IsIn(SUPPORTED_GAMES)
  game!: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  order_id!: string;

  @ApiPropertyOptional({ example: '76561198000000000' })
  @IsOptional()
  @IsString()
  @MaxLength(32)
  steamid?: string;

  @ApiProperty({ example: 5000, description: 'Amount in RUB' })
  @IsInt()
  @Min(1)
  amount!: number;

  @ApiPropertyOptional({ example: 'Валюта $5 000 000' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description?: string;
}
