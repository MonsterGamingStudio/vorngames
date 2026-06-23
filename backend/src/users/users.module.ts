import { Module } from '@nestjs/common';
import { AdminSyncService } from './admin-sync.service';
import { UsersService } from './users.service';

@Module({
  providers: [AdminSyncService, UsersService],
  exports: [AdminSyncService, UsersService],
})
export class UsersModule {}
