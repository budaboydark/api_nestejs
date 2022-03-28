import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Salario } from './interfaces/salario.interface';
import { SalarioService } from './salario.service';
import { CreateSalarioDto } from './dtos/create-salario.dto';

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

  @Post()
  @UsePipes(ValidationPipe)
  async postSalario(@Body() createSalarioDto: CreateSalarioDto): Promise<void> {
    this.serviceSalario.save(createSalarioDto);
  }

  @Put('/:id')
  async putSalario(
    @Param('id') id: string,
    @Body() CreateSalarioDto: CreateSalarioDto,
  ): Promise<void> {
    this.serviceSalario.update(id, CreateSalarioDto);
  }

  @Delete('/:id')
  async deleteSalario(@Param('id') id: string): Promise<void> {
    this.serviceSalario.delete(id);
  }
}
