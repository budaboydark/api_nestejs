import { Injectable } from '@nestjs/common';
import { Salario } from './entitys/salario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalarioDto } from './dtos/create-salario.dto';
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

  async save(createSalarioDto: CreateSalarioDto): Promise<void> {
    const { valor } = createSalarioDto;
    const data = new Date();
    const response = await this.AppDataSource.save({
      valor: valor,
      data: data.toISOString(),
    });
    console.log(response);
  }

  async update(id: string, createSalarioDto: CreateSalarioDto): Promise<void> {
    const { valor } = createSalarioDto;
    const data = new Date();
    const response = await this.AppDataSource.save({
      idsalario: parseInt(id),
      valor: valor,
      data: data.toISOString(),
    });
    console.log(response);
  }

  async delete(id: string): Promise<void> {
    this.AppDataSource.delete({ idsalario: parseInt(id) });
  }
}
