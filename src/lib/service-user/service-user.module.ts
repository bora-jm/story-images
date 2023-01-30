import { Global, Module } from '@nestjs/common';

import { GqlServiceUserProvider } from './service-user.provider';

@Global()
@Module({
  providers: [GqlServiceUserProvider],
  exports: [GqlServiceUserProvider]
})
export class GqlServiceUserModule {}
