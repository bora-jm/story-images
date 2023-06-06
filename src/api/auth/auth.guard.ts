import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { T } from '@common';
import { UserEntity } from '@entities';

import { JWTPayload } from './auth.interfaces';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly service: JwtService,
    private readonly reflector: Reflector,
    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  ) {}

  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const handler = ctx.getHandler();
    const roles = this.reflector.get<string[]>('roles', handler);

    // console.log('role', roles);
    if (roles === undefined) return true;

    const req = ctx.getContext().req;
    const authToken = req.get('authorization') || '';
    const [scheme, token] = authToken.split(' ');

    // console.log(`Scheme: ${scheme}`);
    // console.log(`Token: ${token}`);

    const user = await this.checkUserScheme(scheme, token, roles);
    (req as any).authUser = user;

    return true;
  }

  async checkUserScheme(scheme: string, token: string, roles: string[]) {
    if (scheme.toLowerCase() !== 'bearer') throw new UnauthorizedException('Invalid Authorization Scheme');
    if (!token) throw new UnauthorizedException('Authorization token is missing.');

    let decoded: JWTPayload;
    try {
      decoded = await this.service.verifyAsync<JWTPayload>(token);
      console.log('jwtDecoded', decoded);
    } catch (e: any) {
      throw new UnauthorizedException(e.name + ' ' + e.message);
    }

    // TODO: use your own user table
    const user = await this.userRepo.findOne({ where: { id: decoded.id } });
    if (!user || user.status !== T.StatusEnum.ACTIVE) throw new ForbiddenException('Unknown User');
    if (roles.length > 0 && !roles.find(x => x === user.userType.toUpperCase()))
      throw new ForbiddenException('Invalid User Role');

    return user;
  }
}
