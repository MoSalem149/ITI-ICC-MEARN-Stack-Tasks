import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(createCourseDto: CreateCourseDto): import("./entities/course.entity").Course;
    findAll(): import("./entities/course.entity").Course[];
    findOne(id: string): import("./entities/course.entity").Course;
    update(id: string, updateCourseDto: UpdateCourseDto): import("./entities/course.entity").Course;
    remove(id: string): {
        message: string;
    };
    getError(): void;
}
