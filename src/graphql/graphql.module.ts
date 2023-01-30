import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ConfigService } from '@lib/config';

// import { GqlAuthModule } from './auth/gql-auth.module';

@Module({
  imports: [
    // GqlAuthModule,
    GraphQLModule.forRootAsync({
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => {
        return {
          path: 'v1',
          sortSchema: false,
          playground: config.env.NODE_ENV === 'development',
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          uploads: false,
          context: ({ req }) => ({ req })
        };
      }
    })
  ]
})
export class GraphQLAPIModule {}
