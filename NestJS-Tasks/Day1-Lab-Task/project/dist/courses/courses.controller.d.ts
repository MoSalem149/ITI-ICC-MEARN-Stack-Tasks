import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(newCourse: Course): {
        name: string;
        grade: number;
        students: number[];
    };
    findAll(): Course[];
}
