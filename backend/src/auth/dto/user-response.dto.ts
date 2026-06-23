import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: '76561198000000000' })
  steamId!: string;

  @ApiProperty({ example: 'PlayerOne' })
  username!: string;

  @ApiProperty({ example: 'https://avatars.steamstatic.com/abc_full.jpg' })
  avatarUrl!: string;

  @ApiProperty({ example: 0, description: 'Balance in RUB' })
  balance!: number;

  @ApiProperty({ example: 'user', enum: ['user', 'admin'] })
  role!: string;

  @ApiProperty({ example: false })
  isBlocked!: boolean;

  @ApiProperty({ example: '2025-01-15T12:00:00.000Z' })
  createdAt!: Date;
}
