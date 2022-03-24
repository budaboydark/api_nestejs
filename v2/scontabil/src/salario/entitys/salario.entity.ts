import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Salario {
  @PrimaryGeneratedColumn()
  idsalario: number;

  @Column()
  valor: number;

  @Column()
  data: Date;
}
