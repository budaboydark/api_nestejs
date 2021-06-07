import { Controller, Get, Param } from "@nestjs/common";

@Controller('contas')
export class ContasController{

    @Get()
    obterContas(): string{
        return 'Lista teste contas'
    }

    @Get(':id')
    obterConta(@Param() param): string{
        return `Lista conta ${param.id}`
    }

}