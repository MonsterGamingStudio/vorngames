import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { TebexController } from './tebex.controller';
import { TebexService } from './tebex.service';

@Module({
  imports: [NotificationsModule],
  controllers: [TebexController],
  providers: [TebexService],
  exports: [TebexService],
})
export class TebexModule {}
