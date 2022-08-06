import dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { File } from '../models/file.entity';
import { Project } from '../models/project.entity';
import { User } from '../models/user.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [File, Project, User],
  autoLoadEntities: true,
  synchronize: true,
};
