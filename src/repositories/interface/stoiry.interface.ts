import { T } from '@common';

export interface StoryOpt {
  ids?: number[];
  status?: T.StatusEnum[];
  storyId?: number;
  title?: string;
  description?: string;
  id?: number;
}
