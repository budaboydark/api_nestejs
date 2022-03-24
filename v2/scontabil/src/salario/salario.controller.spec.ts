import { Test, TestingModule } from '@nestjs/testing';
import { SalarioController } from './salario.controller';

describe('SalarioController', () => {
  let controller: SalarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalarioController],
    }).compile();

    controller = module.get<SalarioController>(SalarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
