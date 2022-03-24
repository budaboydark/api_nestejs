import { Module } from '@nestjs/common';
import { SalarioController } from './salario.controller';
import { SalarioService } from './salario.service';

@Module({
  controllers: [SalarioController],
  providers: [SalarioService]
})
export class SalarioModule {}
