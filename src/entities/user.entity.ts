import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { T } from '@common';

@Entity('Users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', nullable: true })
  email!: string;

  @Exclude()
  @Column()
  password!: string; //hashPassword

  @Column({ type: 'varchar', nullable: true })
  fullName!: string;

  @Column({ type: 'enum', enum: T.UserTypeEnum, default: T.UserTypeEnum.USER })
  userType!: T.UserTypeEnum;

  @Column({ type: 'enum', enum: T.StatusEnum, default: T.StatusEnum.ACTIVE })
  status!: T.StatusEnum;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @Column({ nullable: true })
  createdBy?: string;

  @Column({ nullable: true })
  updatedBy?: string;
}
