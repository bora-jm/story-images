import { Args } from '@nestjs/graphql';

export const ArgsId = () => Args('id', { type: () => String, nullable: false });
export const ArgsUserId = () => Args('userId', { type: () => String });
