import { Test, TestingModule } from '@nestjs/testing';
import { MovieticketController } from './movieticket.controller';

describe('MovieticketController', () => {
  let controller: MovieticketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieticketController],
    }).compile();

    controller = module.get<MovieticketController>(MovieticketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
