import dotenv from 'dotenv';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: +process.env.DB_PORT || 3030,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'excel_comp',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true
}