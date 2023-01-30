import { SetMetadata } from '@nestjs/common';

export const GqlAuth = (...roles: ('SUPER_ADMIN' | 'ADMIN' | 'USER')[]) => SetMetadata('roles', roles);
