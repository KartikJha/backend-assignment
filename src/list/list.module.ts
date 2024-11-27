import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './list.controller';
import { ListService } from './list.service';
import { Movie, MovieSchema } from '../models/movie.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]), 
  ],
  controllers: [MoviesController],
  providers: [ListService],
})
export class MoviesModule {}
