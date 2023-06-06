import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ApiModule } from '@api/api.module';
import { ConfigModule } from '@lib/config';
// import { FirebaseAdminModule } from '@lib/firebase-admin';
// import { IORedisModule } from '@lib/ioredis';
// import { JwtModule } from '@lib/jwt';
// import { GqlServiceUserModule } from '@lib/service-user';
import { TypeOrmModule } from '@lib/typeorm';

// import { GraphQLAPIModule } from './graphql/graphql.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule,
    // FirebaseAdminModule,
    // GqlServiceUserModule,
    // GraphQLAPIModule,
    // IORedisModule,
    // JwtModule,
    ScheduleModule.forRoot(),
    TypeOrmModule
  ]
})
export class ApplicationModule {}
