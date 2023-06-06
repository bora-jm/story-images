import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { Auth } from '@common';

import { ChapterFilter, CreateChapterImageInput, CreateChapterInput } from './chapter.dto';
import { ChapterService } from './chapter.service';

@Controller('chapters')
@ApiTags('Chapter')
export class ChapterController {
  constructor(private readonly service: ChapterService) {}

  @Auth()
  @Post()
  @ApiOperation({ summary: 'Create Chapter' })
  createStory(@Body() input: CreateChapterInput) {
    return this.service.createChapter(input);
  }

  @Auth()
  @Post('image')
  @ApiOperation({ summary: 'Create Chapter Image' })
  createChapterImage(@Body() input: CreateChapterImageInput) {
    return this.service.createChapterImage(input);
  }

  @Auth()
  @Get()
  @ApiOperation({ summary: 'Get Chapter List' })
  getChapters(@Query() filter: ChapterFilter) {
    return this.service.getChapters(filter);
  }

  @Auth()
  @Get(':id')
  @ApiOperation({ summary: 'Get Chapter List' })
  getChapter(@Param() id: number) {
    return this.service.getChapter(id);
  }
}
