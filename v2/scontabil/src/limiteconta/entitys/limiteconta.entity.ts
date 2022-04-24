import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Limite_conta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  utilizado: number;

  @Column()
  saldo: number;

  @Column()
  user_id: number;
}
