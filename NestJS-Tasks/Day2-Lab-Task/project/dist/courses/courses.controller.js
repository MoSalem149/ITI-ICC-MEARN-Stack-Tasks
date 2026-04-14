"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesController = void 0;
const common_1 = require("@nestjs/common");
const courses_service_1 = require("./courses.service");
const course_entity_1 = require("./entities/course.entity");
const auth_guard_1 = require("../common/guard/auth.guard");
const role_gaurd_1 = require("../common/guard/role.gaurd");
const roles_decorator_1 = require("../common/decorator/roles.decorator");
const response_interceptor_1 = require("../common/interceptor/response.interceptor");
const http_exception_filter_1 = require("../common/filter/http-exception.filter");
let CoursesController = class CoursesController {
    coursesService;
    constructor(coursesService) {
        this.coursesService = coursesService;
    }
    create(newCourse) {
        return this.coursesService.create(newCourse);
    }
    findAll() {
        return this.coursesService.findAll();
    }
    getError() {
        throw new common_1.HttpException('Courses error', common_1.HttpStatus.BAD_REQUEST);
    }
};
exports.CoursesController = CoursesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_entity_1.Course]),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoursesController.prototype, "getError", null);
exports.CoursesController = CoursesController = __decorate([
    (0, common_1.Controller)('courses'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_gaurd_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseInterceptors)(response_interceptor_1.ResponseInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.ErrorFilter),
    __metadata("design:paramtypes", [courses_service_1.CoursesService])
], CoursesController);
//# sourceMappingURL=courses.controller.js.map