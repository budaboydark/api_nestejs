import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Limite_conta } from './entitys/limiteconta.entity';
import { LimitecontaController } from './limiteconta.controller';
import { LimitecontaService } from './limiteconta.service';

@Module({
  imports: [TypeOrmModule.forFeature([Limite_conta])],
  controllers: [LimitecontaController],
  providers: [LimitecontaService],
})
export class LimitecontaModule {}
