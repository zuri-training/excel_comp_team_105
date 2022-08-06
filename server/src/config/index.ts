// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { File } from '../models/file.entity';
import { Project } from '../models/project.entity';
import { User } from '../models/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'excel',
  password: 'excel',
  database: 'excel_comp_project',
  entities: [File, Project, User],
  autoLoadEntities: true,
  synchronize: true,
};
