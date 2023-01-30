import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { T } from '@common';

@Entity('Chapters')
export class ChapterEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  storyId!: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ type: 'enum', enum: T.StatusEnum, default: T.StatusEnum.ACTIVE })
  status!: T.StatusEnum;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
