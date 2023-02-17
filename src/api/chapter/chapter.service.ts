import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { T } from '@common';
import { ChapterEntity, ChapterImageEntity, StoryEntity } from '@entities';

import { ChapterFilter, CreateChapterImageInput, CreateChapterInput } from './chapter.dto';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(ChapterEntity) private readonly chapterRepo: Repository<ChapterEntity>,
    @InjectRepository(StoryEntity) private readonly storyRepo: Repository<ChapterEntity>,
    @InjectRepository(ChapterImageEntity) private readonly chapterImage: Repository<ChapterImageEntity>
  ) {}

  async createChapter(input: CreateChapterInput) {
    const story = await this.storyRepo.findOne({ where: { id: input.storyId, status: T.StatusEnum.ACTIVE } });
    if (!story) throw new BadRequestException(` Record Not Found!`);

    return await this.chapterRepo.save(input);
  }

  async getChapters(filter: ChapterFilter) {
    const [data, total] = await this.chapterRepo.findAndCount({
      where: {
        ...filter,
        status: T.StatusEnum.ACTIVE
      }
    });

    return { data, total };
  }

  async getChapter(id: number) {
    const chapter = await this.chapterRepo.findOne({ where: { id } });
    if (!chapter) throw new BadRequestException(` Chapter Not Found!`);

    return chapter;
  }

  /**
   * Create chapter images
   */
  async createChapterImage(input: CreateChapterImageInput) {
    const chapter = await this.chapterRepo.findOne({ where: { id: input.chapterId, status: T.StatusEnum.ACTIVE } });
    if (!chapter) throw new BadRequestException(' Chapter Not Found!');
    return this.chapterImage.save(input);
  }
}
