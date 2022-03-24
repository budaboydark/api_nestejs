import { Injectable } from '@nestjs/common';
import { Salario } from './entitys/salario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { DB as AppDataSource } from '../app-data-source';
@Injectable()
export class SalarioService {
  constructor(
    @InjectRepository(Salario)
    private AppDataSource: Repository<Salario>,
  ) {}

  async getSalarios(): Promise<Salario[]> {
    return await this.AppDataSource.find({});
  }

  async getSalario(id: string): Promise<Salario> {
    return await this.AppDataSource.findOne({
      where: {
        idsalario: parseInt(id),
      },
    });
  }
}
