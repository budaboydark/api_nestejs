import { Module } from '@nestjs/common';
import { SalarioModule } from './salario/salario.module';
import { DatabaseModule } from './database/database.module';
import { LimitecontaModule } from './limiteconta/limiteconta.module';

@Module({
  imports: [DatabaseModule, SalarioModule, LimitecontaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
