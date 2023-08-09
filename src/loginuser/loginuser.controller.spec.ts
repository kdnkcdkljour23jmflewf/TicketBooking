import { Test, TestingModule } from '@nestjs/testing';
import { LoginuserController } from './loginuser.controller';

describe('LoginuserController', () => {
  let controller: LoginuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginuserController],
    }).compile();

    controller = module.get<LoginuserController>(LoginuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
