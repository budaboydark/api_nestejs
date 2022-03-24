import { Module } from '@nestjs/common';
import { SalarioModule } from './salario/salario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salario } from './salario/entitys/salario.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, SalarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
