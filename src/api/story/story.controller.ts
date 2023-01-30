import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreateStoryInput, StoryFilter } from './story.dto';
import { StoryService } from './story.service';

@Controller('story')
@ApiTags('Story')
export class StoryController {
  constructor(private readonly service: StoryService) {}

  @Post()
  @ApiOperation({ summary: 'Create Story' })
  createStory(@Body() input: CreateStoryInput) {
    return this.service.createStory(input);
  }

  @Get()
  @ApiOperation({ summary: 'Create Story' })
  getStories(@Query() filter: StoryFilter) {
    return this.service.getStories(filter);
  }

  @Get('single')
  @ApiOperation({ summary: 'Create Story' })
  getStory(@Query() filter: StoryFilter) {
    return this.service.getStory(filter);
  }
}
