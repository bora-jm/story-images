import { Field, InputType, Int } from '@nestjs/graphql';

import { IsNotEmptyEmail, IsNotEmptyNumber, IsNotEmptyString } from '@common';

@InputType()
export class LoginInput {
  @Field(() => String, { description: 'email of the user' })
  @IsNotEmptyEmail()
  email!: string;

  @Field(() => String, { description: 'password of the user' })
  @IsNotEmptyString()
  password!: string;

  @Field(() => String)
  @IsNotEmptyString()
  deviceToken!: string;
}
@InputType()
export class HeaderInput {
  @Field(() => Int!)
  @IsNotEmptyNumber()
  id!: number;

  @Field(() => String)
  @IsNotEmptyString()
  udid!: string;

  @Field(() => String)
  osType!: string;

  @Field(() => String)
  deviceToken!: string;
}
@InputType()
export class ChangePassword {
  @Field(() => Int!)
  @IsNotEmptyNumber()
  id!: number;

  @Field(() => String)
  @IsNotEmptyString()
  oldPassword!: string;

  @Field(() => String)
  @IsNotEmptyString()
  newPassword!: string;
}

@InputType()
export class ResetPassword {
  @Field(() => Number)
  @IsNotEmptyNumber()
  id!: number;
}
