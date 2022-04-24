import { IsNotEmpty } from 'class-validator';
export class CreateLimitecontaDto {
  readonly id: number;

  @IsNotEmpty()
  readonly total: number;

  @IsNotEmpty()
  readonly utilizado: number;

  @IsNotEmpty()
  readonly saldo: number;

  @IsNotEmpty()
  readonly user_id: number;
}
