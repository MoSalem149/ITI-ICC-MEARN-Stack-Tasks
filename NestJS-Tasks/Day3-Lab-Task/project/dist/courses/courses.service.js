"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let CoursesService = class CoursesService {
    courses = [
        {
            name: 'NestJS',
            grade: 100,
            students: [],
        },
    ];
    findAll() {
        return this.courses;
    }
    findOne(id) {
        const course = this.courses[id];
        if (!course) {
            throw new common_1.NotFoundException(`Course with id ${id} not found`);
        }
        return course;
    }
    create(createCourseDto) {
        const newCourse = {
            name: createCourseDto.name,
            grade: createCourseDto.grade,
            students: (createCourseDto.students ?? []).map((studentId) => new mongoose_1.Types.ObjectId(studentId)),
        };
        this.courses.push(newCourse);
        return newCourse;
    }
    update(id, updateCourseDto) {
        const course = this.courses[id];
        if (!course) {
            throw new common_1.NotFoundException(`Course with id ${id} not found`);
        }
        this.courses[id] = {
            ...course,
            ...updateCourseDto,
            students: updateCourseDto.students !== undefined
                ? updateCourseDto.students.map((studentId) => new mongoose_1.Types.ObjectId(studentId))
                : course.students,
        };
        return this.courses[id];
    }
    remove(id) {
        const course = this.courses[id];
        if (!course) {
            throw new common_1.NotFoundException(`Course with id ${id} not found`);
        }
        this.courses.splice(id, 1);
        return { message: `Course with id ${id} deleted successfully` };
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map