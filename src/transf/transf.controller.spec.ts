import { Test, TestingModule } from '@nestjs/testing';
import { TransfController } from './transf.controller';

describe('Transf Controller', () => {
  let controller: TransfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransfController],
    }).compile();

    controller = module.get<TransfController>(TransfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
