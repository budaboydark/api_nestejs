import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersSchema } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'usuarios', schema: UsersSchema }])
  ],
  controllers: [UsersController],
  providers:[UsersService]
})
export class UsersModule {}
