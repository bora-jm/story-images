import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

import { AuthModule } from './auth/auth.module';
import { ChapterModule } from './chapter/chapter.module';
import { CronModule } from './cron/cron.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './files'
    }),
    // --
    CronModule,
    ChapterModule,
    StoryModule,
    AuthModule
  ]
})
export class ApiModule {}
