import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasController } from './contas.controller';

@Module({
  imports: [],
  controllers: [AppController, ContasController],
  providers: [AppService],
})
export class AppModule {}
