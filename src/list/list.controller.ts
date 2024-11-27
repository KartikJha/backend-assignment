import { Controller, Get, Post, Body } from '@nestjs/common';
import { ListService } from './list.service';
// import { CreateMovieDto } from './dto/create-movie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly listService: ListService) {}

  @Get()
  async addToList(userId, listItem) {
    return await this.listService.addToList(userId, listItem);
  }

  // @Post()
  // async create(@Body() createMovieDto: CreateMovieDto) {
  //   return "";
  // }
}
