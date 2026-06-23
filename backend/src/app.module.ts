import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { PaymentsModule } from './payments/payments.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { PurchasesModule } from './purchases/purchases.module';
import { ScriptsModule } from './scripts/scripts.module';
import { StorageModule } from './storage/storage.module';
import { SupportModule } from './support/support.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    StorageModule,
    UsersModule,
    NotificationsModule,
    AuthModule,
    PaymentsModule,
    ScriptsModule,
    PurchasesModule,
    CommentsModule,
    ProfileModule,
    SupportModule,
    AdminModule,
  ],
})
export class AppModule {}
