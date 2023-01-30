import { GraphQLClient } from 'graphql-request';

import { ConfigService } from '../config';
import { GqlServiceUser } from './service-user';
import { SERVICE_USER_TOKEN } from './service-user.constant';
import { ServiceUserConfig } from './service-user.dto';

export const GqlServiceUserProvider = {
  inject: [ConfigService],
  provide: SERVICE_USER_TOKEN,
  useFactory: (configService: ConfigService) => {
    const config = configService.validate('GqlServiceUserModule', ServiceUserConfig);
    const client = new GraphQLClient(config.SERVICE_USER_ENDPOINT, {
      headers: { authorization: config.SERVICE_USER_AUTHENTICATION }
    });
    return new GqlServiceUser(client);
  }
};
