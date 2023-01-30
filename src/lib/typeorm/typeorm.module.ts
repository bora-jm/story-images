import { Global, Module } from '@nestjs/common';
import { TypeOrmModule as OrmModule } from '@nestjs/typeorm';

import * as Entities from '@entities';
import * as Repositories from '@repositories';

import { TypeOrmConfigService } from './typeorm.service';

@Global()
@Module({
  imports: [
    OrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    OrmModule.forFeature([...Object.values(Entities), ...Object.values(Repositories)])
    // OrmModule.forFeature([...Object.values(Entities)])
  ],
  exports: [OrmModule]
})
export class TypeOrmModule {
  static forRoot(arg0: {
    autoLoadEntities: boolean;
  }):
    | import('@nestjs/common').Type<any>
    | import('@nestjs/common').DynamicModule
    | Promise<import('@nestjs/common').DynamicModule>
    | import('@nestjs/common').ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
