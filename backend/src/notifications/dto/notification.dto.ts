import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PaginationQueryDto } from '../../common/dto/common.dto';

export enum NotificationTypeDto {
  comment_submitted = 'comment_submitted',
  comment_approved = 'comment_approved',
  purchase_completed = 'purchase_completed',
  support_reply = 'support_reply',
  support_ticket_created = 'support_ticket_created',
  script_update = 'script_update',
}

export class NotificationListQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'true' })
  @IsOptional()
  @IsString()
  unreadOnly?: string;
}

export class NotificationDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({ enum: NotificationTypeDto })
  type!: NotificationTypeDto;

  @ApiProperty({ example: 'Покупка завершена' })
  title!: string;

  @ApiProperty({ example: 'Скрипт успешно приобретён' })
  body!: string;

  @ApiPropertyOptional({ type: 'object', additionalProperties: true })
  payload?: Record<string, unknown> | null;

  @ApiPropertyOptional()
  readAt?: Date | null;

  @ApiProperty()
  createdAt!: Date;
}

export class NotificationListResponseDto {
  @ApiProperty({ type: [NotificationDto] })
  items!: NotificationDto[];

  @ApiProperty({ example: 1 })
  page!: number;

  @ApiProperty({ example: 20 })
  limit!: number;
}

export class MarkNotificationsReadQueryDto {
  @ApiPropertyOptional({
    description: 'Comma-separated notification IDs; omit to mark all as read',
    example: 'uuid1,uuid2',
  })
  @IsOptional()
  @IsString()
  ids?: string;
}
