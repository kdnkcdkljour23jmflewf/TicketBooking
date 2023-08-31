import { Test, TestingModule } from '@nestjs/testing';
import { MovieticketService } from './movieticket.service';

describe('MovieticketService', () => {
  let service: MovieticketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieticketService],
    }).compile();

    service = module.get<MovieticketService>(MovieticketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
