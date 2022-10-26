import { DataSource } from 'typeorm';
import * as glob from 'fast-glob';

const entities = glob.sync('dist/**/*.entity.js');

export function typeormConfig(): DataSource {
  return new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    entities,
    migrations: ['dist/migrations/*{.ts,.js}'],
  });
}
