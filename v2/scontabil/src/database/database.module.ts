import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salario } from 'src/salario/entitys/salario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.18.0.2',
      port: 3306,
      username: 'rodrigo',
      password: 'rodrigo',
      database: 'scontabil',
      entities:[Salario],
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
