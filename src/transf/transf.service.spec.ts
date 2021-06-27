import { Test, TestingModule } from '@nestjs/testing';
import { TransfService } from './transf.service';

describe('TransfService', () => {
  let service: TransfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransfService],
    }).compile();

    service = module.get<TransfService>(TransfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
