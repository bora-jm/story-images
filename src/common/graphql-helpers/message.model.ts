import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageResult {
  message!: string;
}

export interface ErrorResponse {
  response: {
    errors: Error[];
    status: number;
  };
}

export interface Error {
  message: string;
}
