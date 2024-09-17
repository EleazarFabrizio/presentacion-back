import { Test, TestingModule } from '@nestjs/testing';
import { SendyController } from './sendy.controller';

describe('SendyController', () => {
  let controller: SendyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendyController],
    }).compile();

    controller = module.get<SendyController>(SendyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
