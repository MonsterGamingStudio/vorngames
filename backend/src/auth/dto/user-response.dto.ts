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
}
