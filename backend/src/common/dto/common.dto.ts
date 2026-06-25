import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class OkResponseDto {
  @ApiProperty({ example: true })
  ok!: boolean;
}

export class PaginationQueryDto {
  @ApiPropertyOptional({ example: 1, minimum: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ example: 20, minimum: 1, maximum: 100 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number;
}

export class CountResponseDto {
  @ApiProperty({ example: 3 })
  count!: number;
}

export class AchievementDto {
  @ApiProperty({ example: 'top_commentator' })
  id!: string;

  @ApiProperty({ example: 'Топ комментатор' })
  title!: string;

  @ApiProperty({ example: '15 комментариев под разными скриптами' })
  description!: string;

  @ApiProperty({ example: true })
  unlocked!: boolean;

  @ApiProperty({ example: 'orange', enum: ['orange', 'green', 'purple'] })
  color!: string;
}

export class PublicUserDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'PlayerOne' })
  username!: string;

  @ApiProperty({ example: 'https://avatars.steamstatic.com/abc_full.jpg' })
  avatarUrl!: string;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  createdAt!: Date;
}
