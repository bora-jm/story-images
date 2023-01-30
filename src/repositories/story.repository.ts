import { EntityRepository, Repository } from 'typeorm';

import { StoryEntity } from '@entities';

import { StoryOpt } from './interface/stoiry.interface';

@EntityRepository(StoryEntity)
export class StoryRepository extends Repository<StoryEntity> {
  async $findAllServices(opt: StoryOpt) {
    const { id, ids, status, title, storyId } = opt;
    const q = this.createQueryBuilder('s')
      .leftJoinAndMapMany('s.Chapters', 'Chapters', 'u', 'u.storyId = s.id')
      .leftJoinAndMapMany('u.Images', 'ChapterImages', 'ci', 'ci.chapterId = u.id');
    if (id)                   q.andWhere('s.id             = :id',          { id }); // prettier-ignore
    if (storyId)                   q.andWhere('u.id             = :id',          { id: storyId }); // prettier-ignore
    if (status)                 q.andWhere('s.status           IN (...:status)',        { status }); // prettier-ignore
    if (ids)                 q.andWhere('s.id           IN (:...ids)',        { ids }); // prettier-ignore
    if (title)            q.andWhere('lower(s.title)        LIKE lower(:title)',       { title: `%${title}%` }); // prettier-ignore

    const [data, total] = await Promise.all([q.getMany(), q.getCount()]);
    return { data, total };
  }
}
