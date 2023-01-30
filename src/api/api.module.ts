import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

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
    StoryModule
  ]
})
export class ApiModule {}
