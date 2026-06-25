import { ApiProperty } from '@nestjs/swagger';
import { AchievementDto, PublicUserDto } from '../../common/dto/common.dto';
import { UserResponseDto } from '../../auth/dto/user-response.dto';

export class ProfileMeResponseDto extends UserResponseDto {
  @ApiProperty({ type: [AchievementDto] })
  achievements!: AchievementDto[];
}

export class PublicProfileResponseDto extends PublicUserDto {
  @ApiProperty({ type: [AchievementDto] })
  achievements!: AchievementDto[];
}
