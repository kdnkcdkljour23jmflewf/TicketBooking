import { Module } from '@nestjs/common';
import { MovieticketController } from './movieticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieticketService } from './movieticket.service';
import { Ticket } from './ticket.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Ticket])],
  controllers: [MovieticketController],
  providers: [MovieticketService]
})
export class MovieticketModule {}
