import { IsNotEmpty } from 'class-validator';
export class CreateSalarioDto {
  readonly data: Date;

  @IsNotEmpty()
  readonly valor: number;
}
