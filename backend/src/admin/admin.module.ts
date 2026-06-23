import { Module } from '@nestjs/common';
import { PurchasesModule } from '../purchases/purchases.module';
import { ScriptsModule } from '../scripts/scripts.module';
import { UsersModule } from '../users/users.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [UsersModule, PurchasesModule, ScriptsModule],
  controllers: [AdminController],
})
export class AdminModule {}
