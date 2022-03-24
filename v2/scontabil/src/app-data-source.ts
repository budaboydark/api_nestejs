import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '172.18.0.2',
  port: 3306,
  username: 'rodrigo',
  password: 'rodrigo',
  database: 'scontabil',
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export const DB = AppDataSource;
