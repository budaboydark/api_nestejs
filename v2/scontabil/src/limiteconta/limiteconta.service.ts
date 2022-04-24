import { Injectable, NotFoundException } from '@nestjs/common';
import { Limite_conta } from './entitys/limiteconta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Limiteconta } from './interfaces/limiteconta.interface';
import { CreateLimitecontaDto } from './dtos/create-limiteconta.dto';

@Injectable()
export class LimitecontaService {
  constructor(
    @InjectRepository(Limite_conta)
    private AppDataSource: Repository<Limite_conta>,
  ) {}

  async getLimites(): Promise<Limiteconta[]> {
    return await this.AppDataSource.find({});
  }

  async getLimite(id: string): Promise<Limiteconta> {
    const response = await this.AppDataSource.findOne({
      where: {
        id: parseInt(id),
      },
    });
    if (response) {
      return response;
    }
    throw new NotFoundException('dados não encontrados');
  }

  async save(createlimiteconta: CreateLimitecontaDto): Promise<void> {
    // const { total, utilizado, saldo, user_id } = createlimiteconta;

    const response = await this.AppDataSource.save(createlimiteconta);
    console.log(response);
  }

  async update(
    id: string,
    createLimitecontaDto: CreateLimitecontaDto,
  ): Promise<void> {

    console.log(createLimitecontaDto);

    // const response = await this.AppDataSource.save(createLimitecontaDto);
    // console.log(response);
  }

  // async delete(id: string): Promise<void> {
  //   this.AppDataSource.delete({ idsalario: parseInt(id) });
  // }
}
