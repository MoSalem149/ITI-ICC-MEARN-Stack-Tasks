import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { Types } from 'mongoose';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      name: 'NestJS',
      grade: 100,
      students: [],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: number): Course {
    const course = this.courses[id];
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  create(createCourseDto: CreateCourseDto): Course {
    const newCourse: Course = {
      name: createCourseDto.name,
      grade: createCourseDto.grade,
      students: (createCourseDto.students ?? []).map(
        (studentId) => new Types.ObjectId(studentId),
      ),
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  update(id: number, updateCourseDto: UpdateCourseDto): Course {
    const course = this.courses[id];
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }

    this.courses[id] = {
      ...course,
      ...updateCourseDto,
      students:
        updateCourseDto.students !== undefined
          ? updateCourseDto.students.map(
              (studentId) => new Types.ObjectId(studentId),
            )
          : course.students,
    };
    return this.courses[id];
  }

  remove(id: number): { message: string } {
    const course = this.courses[id];
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }

    this.courses.splice(id, 1);
    return { message: `Course with id ${id} deleted successfully` };
  }
}
