import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { GenderStatusEnum, StatusEnum } from 'src/common/types';

import { IsOptionalNumber, IsOptionalString, Paginated, T } from '@common';

// model to response
@ObjectType()
export class Department {
  @Field(() => Int!)
  id!: number;

  @Field(() => String)
  name?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;
}

@ObjectType()
export class Company {
  @Field(() => Int!)
  id!: number;

  @Field(() => Int, { nullable: true })
  @IsOptionalNumber()
  parentId?: number;

  @Field(() => String!)
  name!: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: 'description of the company'
  })
  description!: string;

  @Field(() => T.StatusEnum)
  status?: StatusEnum;

  @Field(() => GraphQLISODateTime)
  createdAt!: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt!: Date;
}

@ObjectType()
export class Position {
  @Field(() => Int!)
  id!: number;

  @Field(() => String)
  name?: string;
}

@ObjectType()
export class User {
  @Field(() => Int!)
  id!: number;

  @Field(() => Int!)
  departmentId!: number;

  @Field(() => Int!)
  positionId!: number;

  @Field(() => Int!)
  companyId!: number;

  @Field(() => Int!)
  roleId!: number;

  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String, { nullable: true })
  @IsOptionalString()
  image!: string;

  @Field(() => String)
  email?: string;

  @Field(() => String)
  password!: string;

  @Field(() => Date)
  dob?: Date;

  @Field(() => String)
  pob?: string;

  @Field(() => String)
  currentAddress?: string;

  @Field(() => Date)
  joinDate?: Date;

  @Field(() => T.GenderStatusEnum)
  gender?: GenderStatusEnum;

  @Field(() => String)
  userType?: string;

  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @Field(() => T.StatusEnum)
  status?: StatusEnum;

  @Field(() => Date)
  createdAt?: Date;

  @Field(() => Date)
  updatedAt?: Date;

  @Field(() => Company)
  company?: Company;

  @Field(() => Department, { nullable: true })
  department?: Department;

  @Field(() => Position, { nullable: true })
  position?: Position;
}

@ObjectType()
export class PaginatedUser extends Paginated(User) {}

export class UserResponseBooking {
  username?: string;
  bookingTime?: string;
}
