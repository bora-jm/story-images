import { IsNotEmptyString, IsOptionalString } from '@common';

export class CreateStoryInput {
  @IsNotEmptyString()
  title?: string;

  @IsOptionalString()
  description?: string;
}

export class StoryFilter {
  @IsOptionalString()
  id?: number;

  @IsOptionalString()
  storyId?: number;

  @IsOptionalString()
  title?: string;

  @IsOptionalString()
  description?: string;
}
