import { Module } from '@nestjs/common';
import { SalarioModule } from './salario/salario.module';

@Module({
  imports: [SalarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
