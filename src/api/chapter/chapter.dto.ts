import { IsNotEmptyNumber, IsNotEmptyString, IsOptionalString } from '@common';

export class CreateChapterInput {
  @IsNotEmptyNumber()
  storyId!: number;

  @IsOptionalString()
  title?: string;

  @IsOptionalString()
  description?: string;

  @IsOptionalString()
  image?: string;
}

export class ChapterFilter {
  @IsOptionalString()
  id?: number;

  @IsOptionalString()
  title?: string;

  @IsOptionalString()
  description?: string;
}

export class CreateChapterImageInput {
  @IsNotEmptyNumber()
  chapterId!: number;

  @IsNotEmptyString()
  image?: string;
}
