import { Module } from '@nestjs/common';
import { SalarioController } from './salario.controller';
import { SalarioService } from './salario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salario } from './entitys/salario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salario])],
  controllers: [SalarioController],
  providers: [SalarioService],
})
export class SalarioModule {}
