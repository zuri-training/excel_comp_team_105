import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  auth_id: string;

  @Column()
  token: string;

  @CreateDateColumn()
  @Column()
  created_at: Date;

  @UpdateDateColumn()
  @Column()
  updated_at: Date;
}
