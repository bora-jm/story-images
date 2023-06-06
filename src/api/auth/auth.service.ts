import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcryptjs from 'bcryptjs';
// import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

import { T } from '@common';
import { UserEntity } from '@entities';

import * as I from './auth.dto';

// import { token, token } from 'morgan';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>
  ) {}

  // async getUserProfile({ id }: AuthUserX) {
  //   const data = await this.userRepo.$findOneMap({ id });
  //   if (!data) throw new BadRequestException(` User Not Found!`);
  //   const company = await this.companyRepo.findOne({ where: { id: data?.companyId } });
  //   const employeeID = `${company?.prefix}-${data?.employeeCode}`;
  //   const user = {
  //     ...data,
  //     employeeID
  //   };

  //   return user;
  // }

  // async adminLogin({ email, password, deviceToken }: I.AdminLoginInput, headers: ApiCustomHeader) {
  //   const { udid, platform } = headers;

  //   const user = await this.userRepo.$findOneMap({ email });
  //   if (!user) throw new NotFoundException('User not found.');

  //   if (!bcryptjs.compareSync(password, user.password)) throw new UnauthorizedException('Invalid email or password.');
  //   if (user.status !== T.StatusEnum.ACTIVE || user.userType === T.UserTypeEnum.USER)
  //     throw new UnauthorizedException('User is not allowed.');

  //   const { id, status, roleId, userType } = user;

  //   const payload = { id, status, userType, roleId, loginDate: new Date() };
  //   const token = await this.jwtService.signAsync(payload, { noTimestamp: true });

  //   //const device = await this.userDeviceRepo.findOne({ where: { userId: user.id } });
  //   // if (device) await this.userDeviceRepo.update(device.id, {});
  //   const userDeviceData = {
  //     userId: user.id,
  //     osType: platform,
  //     udid,
  //     deviceToken
  //   };
  //   const userDevice = await this.userDeviceRepo.save({ ...userDeviceData });
  //   const userLogin = {
  //     userId: user.id,
  //     userDeviceId: userDevice.id,
  //     udid,
  //     token
  //   };
  //   await this.userLoginRepo.save({ ...userLogin });
  //   return { token, user };
  // }

  async login({ email, password }: I.LoginBody) {
    // const { udid, platform } = headers;
    // if (!udid) throw new BadRequestException('udid is required');
    // if (!platform) throw new BadRequestException('platform is required');

    const user = await this.userRepo.findOne({ where: { email: email } });
    if (!user) throw new NotFoundException('Invalid username or password.');

    if (!bcryptjs.compareSync(password, user.password))
      throw new UnauthorizedException('Invalid username or password.');
    if (user.status !== T.StatusEnum.ACTIVE) throw new UnauthorizedException('User is not allowed.');

    const { id, status, userType } = user;
    // const role = await this.roleRepo.findOne({ where: { id: 3 } });
    // const userRole = await this.userRepo.findOne({ where: { roleId: role?.id } });
    // if (!userRole) throw new NotFoundException('User Role not found');

    // const payload = { sub: `${id}|${user.email}`, status, loginDate: new Date() }
    const payload = { id, status, userType, loginDate: new Date() };
    const token = await this.jwtService.signAsync(payload, { noTimestamp: true });

    //Query from userDevice

    // const device = await this.userDeviceRepo.findOne({
    //   where: { userId: user.id, udid }
    // });
    return { token, user };
  }

  // async logOut({ id: userId }: AuthUserX, headers: GqlCustomHeader) {
  //   const { udid, authorization } = headers;

  //   if (!udid) throw new BadRequestException('udid is required.');
  //   const [_, token] = authorization.split(' ');
  //   const userLogIn = await this.userLoginRepo.findOne({
  //     where: { userId, token, status: T.StatusEnum.ACTIVE },
  //     order: { createdAt: -1 }
  //   });
  //   if (!userLogIn) throw new BadRequestException('Unable to logout');
  //   await this.userLoginRepo.update({ id: userLogIn.id }, { status: T.StatusEnum.DELETED });

  //   return true;
  // }

  //change password when KNOW our current password
  // async changePassword({ id }: AuthUserX, { oldPassword, newPassword }: I.ChangePassword) {
  //   const user = await this.userRepo.$findOneMap({ id });
  //   if (!user) throw new UnauthorizedException('Account is not exist');
  //   if (!(await bcryptjs.compare(oldPassword, user?.password))) throw new UnauthorizedException('Invalid password.');
  //   // if (oldPassword != user?.password) throw new UnauthorizedException('Invalid old password.');
  //   //user exist or not after update new password

  //   const password = await encodePassword(newPassword);
  //   await this.userRepo.update(user.id, { password });

  //   return user;
  // }

  // private async validateExist(id: number) {
  //   if (!id) throw new BadRequestException('id is required.');
  //   const data = await this.userRepo.$findOneMap({ id });
  //   if (!data) throw new BadRequestException('Record not found.');
  //   return data;
  // }

  // //reset password when DON'T KNOW our current password
  // async resetPassword({ id }: I.ResetPassword) {
  //   const user = await this.validateExist(id);

  //   const password = await encodePassword('123456');
  //   await this.userRepo.update(user.id, { password });
  //   return user;
  // }
}
