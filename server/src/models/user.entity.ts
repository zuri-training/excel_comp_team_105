import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @ApiProperty({ description: 'id of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'username of the user' })
  @Column()
  username: string;

  @ApiProperty({ description: 'firstname of the user' })
  @Column()
  firstname: string;

  @ApiProperty({ description: 'lastname of the user' })
  @Column()
  lastname: string;

  @ApiProperty({ description: 'authentication id of the user' })
  @Column()
  auth_id: string;

  @ApiProperty({ description: 'valid token of the user' })
  @Column()
  token: string;

  @ApiProperty({ description: 'creation date of the user' })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({ description: 'last update date of the user object' })
  @UpdateDateColumn()
  updated_at: Date;
}
