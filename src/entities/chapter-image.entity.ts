import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { T } from '@common';

@Entity('ChapterImages')
export class ChapterImageEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  chapterId!: number;

  @Column({ type: 'varchar' })
  image?: string;

  @Column({ type: 'enum', enum: T.StatusEnum, default: T.StatusEnum.ACTIVE })
  status!: T.StatusEnum;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;
}
