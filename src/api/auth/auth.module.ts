import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigModule, ConfigService } from '@lib/config';

import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: 'JWT_SECRET',
        signOptions: { expiresIn: '60s' }
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [AuthController],
  exports: [AuthService],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {}
