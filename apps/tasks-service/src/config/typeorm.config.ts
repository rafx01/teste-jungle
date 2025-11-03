import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Task } from '../entities/task.entity';

config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [Task],
  migrations: ['src/migrations/*-migrations.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
