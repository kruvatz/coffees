import { Test, TestingModule } from '@nestjs/testing';
import { CoffeemachineController } from './coffeemachine.controller';

describe('CoffeemachineController', () => {
  let controller: CoffeemachineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeemachineController],
    }).compile();

    controller = module.get<CoffeemachineController>(CoffeemachineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
