import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { LoginBody } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}
  // @Authorize()
  // @Post('authorize')
  // @ApiOperation({ summary: 'Authorize' })
  // @ApiHeader({
  //   name: 'Authorization',
  //   description: 'Bearer token authorize using sha1 to encryption(clientId:clientSecret)'
  // })
  // authorize(@Body() { clientId }: AuthorizeBody, @ApiCustomHeaders() header: ApiCustomHeader) {
  //   return this.service.authorize(clientId, header.udid);
  // }
  // @Authenticate()
  // @ApiHeader({ name: 'token' })
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  login(@Body() body: LoginBody) {
    return this.service.login(body);
  }
}
