import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  //  Param,
  // Delete,
  UseGuards,
  UseInterceptors,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
// import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { AuthGuard } from '../common/guard/auth.guard';
import { RoleGuard } from '../common/guard/role.gaurd';
import { Roles } from '../common/decorator/roles.decorator';
import { ResponseInterceptor } from '../common/interceptor/response.interceptor';
import { ErrorFilter } from '../common/filter/http-exception.filter';

@Controller('courses')
@UseGuards(AuthGuard, RoleGuard)
@Roles('admin')
@UseInterceptors(ResponseInterceptor)
@UseFilters(ErrorFilter)
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() newCourse: Course) {
    return this.coursesService.create(newCourse);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('error')
  getError() {
    throw new HttpException('Courses error', HttpStatus.BAD_REQUEST);
  }

  // @Post()
  // create(@Body() createCourseDto: CreateCourseDto) {
  //   return this.coursesService.create(createCourseDto);
  // }

  // @Get()
  // findAll() {
  //   return this.coursesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.coursesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
  //   return this.coursesService.update(+id, updateCourseDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(+id);
  // }
}
