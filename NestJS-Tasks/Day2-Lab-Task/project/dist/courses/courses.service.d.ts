import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courses;
    findAll(): Course[];
    create(newCourse: {
        name: string;
        grade: number;
        students: number[];
    }): {
        name: string;
        grade: number;
        students: number[];
    };
}
