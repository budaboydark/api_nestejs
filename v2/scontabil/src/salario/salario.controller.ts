import { Controller, Get, Param } from '@nestjs/common';
import { Salario } from './interfaces/salario.interface';
import { SalarioService } from './salario.service';

@Controller('api/v2/salario')
export class SalarioController {
  constructor(private readonly serviceSalario: SalarioService) {}
  @Get()
  async getSalarios(): Promise<Salario[]> {
    return this.serviceSalario.getSalarios();
  }

  @Get('/:id')
  async getSalario(@Param('id') id: string): Promise<Salario> {
    return this.serviceSalario.getSalario(id);
  }
}
