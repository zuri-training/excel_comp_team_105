import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('json')
  files: {
    file1: number;
    file2: number;
  };

  @CreateDateColumn()
  @Column()
  created_at: Date;

  @UpdateDateColumn()
  @Column()
  updated_at: Date;
}
