import { Module } from '@nestjs/common';
import { NotificationsModule } from '../notifications/notifications.module';
import { ScriptsModule } from '../scripts/scripts.module';
import {
  AdminCommentsController,
  CommentsController,
} from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  imports: [ScriptsModule, NotificationsModule],
  controllers: [CommentsController, AdminCommentsController],
  providers: [CommentsService],
  exports: [CommentsService],
})
export class CommentsModule {}
