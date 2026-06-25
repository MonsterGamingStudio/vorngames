import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsString, MinLength } from 'class-validator';
import { PublicUserDto } from '../../common/dto/common.dto';

export enum SupportTicketStatusDto {
  open = 'open',
  closed = 'closed',
}

export class CreateTicketDto {
  @ApiProperty({ example: 'Cannot download purchased script' })
  @IsString()
  @MinLength(3)
  subject!: string;

  @ApiProperty({ example: 'After purchase the download button returns 404' })
  @IsString()
  @MinLength(3)
  body!: string;
}

export class AddMessageDto {
  @ApiProperty({ example: 'Here are more details about the issue...' })
  @IsString()
  @MinLength(1)
  body!: string;
}

export class SupportTicketDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ example: 'VG-20260625-1234' })
  ticketNumber!: string;

  @ApiProperty()
  subject!: string;

  @ApiProperty({ enum: SupportTicketStatusDto })
  status!: SupportTicketStatusDto;

  @ApiPropertyOptional()
  closedAt?: Date | null;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}

export class SupportMessageDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  body!: string;

  @ApiProperty()
  isStaff!: boolean;

  @ApiProperty()
  createdAt!: Date;

  @ApiPropertyOptional({ type: PublicUserDto })
  author?: PublicUserDto;
}

export class SupportTicketDetailDto extends SupportTicketDto {
  @ApiProperty({ type: [SupportMessageDto] })
  messages!: SupportMessageDto[];
}

export class AdminSupportTicketDto extends SupportTicketDto {
  @ApiPropertyOptional({
    type: 'object',
    properties: {
      id: { type: 'string' },
      username: { type: 'string' },
      steamId: { type: 'string' },
    },
  })
  user?: { id: string; username: string; steamId: string };
}
