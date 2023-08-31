import { Module } from '@nestjs/common';
import { MovieticketController } from './movieticket.controller';
import { MovieticketService } from './movieticket.service';

@Module({
  controllers: [MovieticketController],
  providers: [MovieticketService]
})
export class MovieticketModule {}
