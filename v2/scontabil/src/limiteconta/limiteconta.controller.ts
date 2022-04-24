import { Body, Controller, Get, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { LimitecontaService } from './limiteconta.service';
import { Limiteconta } from './interfaces/limiteconta.interface';
import { CreateLimitecontaDto } from './dtos/create-limiteconta.dto';

@Controller('/api/v2/limiteconta')
export class LimitecontaController {
  constructor(private readonly limiteContaService: LimitecontaService) {}
  @Get()
  async getLimitecontas(): Promise<Limiteconta[]> {
    return this.limiteContaService.getLimites();
  }

  @Get('/:id')
  async getLimiteconta(@Param('id') id: string): Promise<Limiteconta> {
    return this.limiteContaService.getLimite(id);
  }

//   @Post()
//   @UsePipes(ValidationPipe)
//   async postSalario(@Body() createSalarioDto: CreateSalarioDto): Promise<void> {
//     this.serviceSalario.save(createSalarioDto);
//   }

  @Put('/:id')
  @UsePipes(ValidationPipe)
  async putLimiteconta(
    @Param('id') id: string,
    @Body() createLimiteContaDto: CreateLimitecontaDto,
  ): Promise<void> {
    this.limiteContaService.update(id, createLimiteContaDto);
  }

//   @Delete('/:id')
//   async deleteSalario(@Param('id') id: string): Promise<void> {
//     this.serviceSalario.delete(id);
//   }
}
