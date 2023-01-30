import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { T } from '@common';

export const AuthUser = createParamDecorator((args: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.authUser;
});

// TODO: create your own Authenticate User Interface
export interface AuthUserX {
  id: number;
  companyId: number;
  departmentId: number;
  positionId: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  userType: T.UserTypeEnum;
  group: string;
  role: string;
  isArchived: boolean;
}
