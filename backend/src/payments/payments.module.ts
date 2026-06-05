import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { UnitpayService } from './unitpay.service';
import { WsCallbackService } from './ws-callback.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, UnitpayService, WsCallbackService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
