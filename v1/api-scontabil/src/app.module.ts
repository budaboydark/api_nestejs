import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasController } from './contas.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@172.20.0.3:27017/got?authSource=admin'),
 UsersModule],
  controllers: [AppController, ContasController],
  providers: [AppService],
})
export class AppModule {}
