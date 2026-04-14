import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courses;
    findAll(): Course[];
    findOne(id: number): Course;
    create(createCourseDto: CreateCourseDto): Course;
    update(id: number, updateCourseDto: UpdateCourseDto): Course;
    remove(id: number): {
        message: string;
    };
}
