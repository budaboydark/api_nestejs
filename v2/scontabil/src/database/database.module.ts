import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salario } from '../salario/entitys/salario.entity';
import { Limite_conta } from '../limiteconta/entitys/limiteconta.entity';

console.log(__dirname);
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<string>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASS'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [Salario, Limite_conta],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env`,
    }),
  ],
})
export class DatabaseModule {}
