/* eslint-disable @typescript-eslint/naming-convention */
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
});

// interface RealmAccess {
//   roles: string[];
// }

// interface ResourceAccess {
//   'realm-management': RealmAccess;
//   account: RealmAccess;
// }
export interface CurrentUser {
  avatar: string;
  id: string;
  userType: string;
  status: string;
}
