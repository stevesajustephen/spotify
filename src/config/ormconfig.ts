import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as glob from 'fast-glob';
import * as path from 'path';

const env = dotenv.config({
  path: __dirname + `../../../.env.${process.env.NODE_ENV}`,
}).parsed;

const entities = glob.sync('dist/**/*.entity.js');

const typeormConfig: DataSource = new DataSource({
  type: 'mysql',
  host: env?.HOST,
  port: Number(env?.DB_PORT),
  username: env?.DATABASE_USER,
  password: env?.DATABASE_PASSWORD,
  database: env?.DATABASE,
  entities,
  migrations: ['dist/migrations/*{.ts,.js}'],
  synchronize: false,
});

export default typeormConfig;
