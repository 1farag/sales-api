import { DataSource, DataSourceOptions } from 'typeorm';
// config dotenv
import { config } from 'dotenv';
config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTransactionMode: 'all',
  migrationsRun: true,
  migrations: ['dist/*.migration{.ts,.js}'],
  metadataTableName: 'typeorm_metadata',
  synchronize: true,
};
const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
