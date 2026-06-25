import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsString, MinLength } from 'class-validator';
import { PublicUserDto } from '../../common/dto/common.dto';

export class CreateCommentDto {
  @ApiProperty({ example: 'Great script, works perfectly!' })
  @IsString()
  @MinLength(2)
  text!: string;
}

export enum ModerateCommentStatusDto {
  approved = 'approved',
  rejected = 'rejected',
}

export class ModerateCommentDto {
  @ApiProperty({ enum: ModerateCommentStatusDto })
  @IsEnum(ModerateCommentStatusDto)
  status!: ModerateCommentStatusDto;
}

export class CommentAuthorDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  username!: string;

  @ApiProperty()
  avatarUrl!: string;
}

export class CommentDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty()
  text!: string;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty({ type: CommentAuthorDto })
  author!: CommentAuthorDto;
}

export class CreateCommentResponseDto {
  @ApiProperty({ format: 'uuid' })
  id!: string;

  @ApiProperty({
    example:
      'Комментарий отправлен на модерацию и будет опубликован после одобрения администрацией',
  })
  message!: string;
}

export class PendingCommentDto extends CommentDto {
  @ApiProperty({ type: CommentAuthorDto })
  user!: CommentAuthorDto;

  @ApiProperty({
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
      title: { type: 'string' },
      slug: { type: 'string' },
    },
  })
  script!: { id: string; title: string; slug: string };
}
