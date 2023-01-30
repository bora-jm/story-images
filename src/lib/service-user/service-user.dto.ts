import { IsNotEmpty, IsString } from 'class-validator';

export class ServiceUserConfig {
  @IsNotEmpty()
  @IsString()
  SERVICE_USER_ENDPOINT!: string;

  // @IsNotEmpty()
  @IsString()
  SERVICE_USER_AUTHENTICATION!: string;
}
