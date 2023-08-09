import { Test, TestingModule } from '@nestjs/testing';
import { LoginuserService } from './loginuser.service';

describe('LoginuserService', () => {
  let service: LoginuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginuserService],
    }).compile();

    service = module.get<LoginuserService>(LoginuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
