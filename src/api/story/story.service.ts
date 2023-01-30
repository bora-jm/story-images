import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { T } from '@common';
import { StoryRepository } from '@repositories';

import { CreateStoryInput, StoryFilter } from './story.dto';

@Injectable()
export class StoryService {
  constructor(@InjectRepository(StoryRepository) private readonly storyRepo: StoryRepository) {}

  async createStory(input: CreateStoryInput) {
    return await this.storyRepo.save(input);
  }

  async getStories(filter: StoryFilter) {
    const { data, total } = await this.storyRepo.$findAllServices(filter);

    return { data, total };
  }

  async getStory(filter: StoryFilter) {
    const data = await this.storyRepo.findOne({ where: { ...filter, status: T.StatusEnum.ACTIVE } });
    if (!data) throw new BadRequestException(` Record Not Found!`);

    return data;
  }
}
