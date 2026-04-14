import { Injectable } from '@nestjs/common';
// import { CreateCourseDto } from './dto/create-course.dto';
// import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  // Course Array
  private courses: Course[] = [
    {
      name: 'NestJS',
      grade: 100,
      students: [],
    },
  ];

  // Return all courses
  findAll() {
    return this.courses;
  }

  // Create new course
  create(newCourse: { name: string; grade: number; students: number[] }) {
    this.courses.push(newCourse);
    return newCourse;
  }

  // create(createCourseDto: CreateCourseDto) {
  //   return 'This action adds a new course';
  // }

  // findAll() {
  //   return `This action returns all courses`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} course`;
  // }

  // update(id: number, updateCourseDto: UpdateCourseDto) {
  //   return { id, ...updateCourseDto, status: 'updated' };
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} course`;
  // }
}
