import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { TebexCheckoutService } from './tebex-checkout.service';
import { TebexHeadlessService } from './tebex-headless.service';
import { TebexController } from './tebex.controller';
import { TebexService } from './tebex.service';

@Module({
  imports: [NotificationsModule],
  controllers: [TebexController],
  providers: [TebexService, TebexCheckoutService, TebexHeadlessService],
  exports: [TebexService],
})
export class TebexModule {}
