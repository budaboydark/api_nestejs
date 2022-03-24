import { Test, TestingModule } from '@nestjs/testing';
import { SalarioService } from './salario.service';

describe('SalarioService', () => {
  let service: SalarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalarioService],
    }).compile();

    service = module.get<SalarioService>(SalarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
