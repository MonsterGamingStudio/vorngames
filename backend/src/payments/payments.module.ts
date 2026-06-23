import { Module, forwardRef } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { PurchasesModule } from '../purchases/purchases.module';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { UnitpayService } from './unitpay.service';
import { WsCallbackService } from './ws-callback.service';

@Module({
  imports: [
    NotificationsModule,
    forwardRef(() => PurchasesModule),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, UnitpayService, WsCallbackService],
  exports: [PaymentsService, UnitpayService],
})
export class PaymentsModule {}
