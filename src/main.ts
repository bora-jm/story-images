import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as compression from 'compression';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { resolve } from 'path';

import { ApiExceptionFilter } from '@common';
import { ConfigModule, ConfigService } from '@lib/config';

import { ApplicationModule } from './app.module';
// import { GqlAuthGuard } from './graphql/auth/gql-auth.guard';
// import { GqlAuthModule } from './graphql/auth/gql-auth.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);

  // =================================
  // configureExpressSettings
  // =================================
  app.set('etag', 'strong');
  app.set('trust proxy', true);
  app.set('x-powered-by', false);

  // =================================
  // configureExpressMiddleware
  // =================================
  app.enableCors({ origin: true });
  app.setViewEngine('pug');
  app.setBaseViewsDir(resolve('.', 'views'));
  app.useStaticAssets(resolve('.', 'public'));
  app.use(express.json({ limit: '5mb' }));
  app.use(compression());
  app.use(helmet({ contentSecurityPolicy: { reportOnly: true } }));
  app.use(morgan('dev'));

  // =================================
  // configureNestGlobals
  // =================================
  const config = app.select(ConfigModule).get(ConfigService, { strict: true });
  // const gqlAuthGuard = app.select(GqlAuthModule).get(GqlAuthGuard);

  // app.useWebSocketAdapter(new RedisIoAdapter(app, config));
  // app.useGlobalGuards(gqlAuthGuard);
  app.useGlobalFilters(new ApiExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
      errorHttpStatusCode: 422
    })
  );

  // =================================
  // configureNestConfig
  // =================================
  const port = config.env.PORT;
  await app.listen(port).then(x => console.log(`Listen on port ${port}`));

  // =================================
  // configureNestHotReload
  // =================================
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
