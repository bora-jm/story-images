import { IsNotEmptyString } from '@common';

export class AuthorizeBody {
  @IsNotEmptyString()
  readonly clientId!: string;
}

export class LoginBody {
  @IsNotEmptyString()
  readonly email!: string;

  @IsNotEmptyString()
  readonly password!: string;
}
