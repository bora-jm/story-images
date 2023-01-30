import { Inject } from '@nestjs/common';

import { SERVICE_USER_TOKEN } from './service-user.constant';

export const InjectServiceUser = () => Inject(SERVICE_USER_TOKEN);
