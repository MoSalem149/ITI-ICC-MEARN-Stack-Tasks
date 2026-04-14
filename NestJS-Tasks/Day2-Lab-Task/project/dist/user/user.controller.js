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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const role_gaurd_1 = require("../common/guard/role.gaurd");
const auth_guard_1 = require("../common/guard/auth.guard");
const roles_decorator_1 = require("../common/decorator/roles.decorator");
const response_interceptor_1 = require("../common/interceptor/response.interceptor");
const http_exception_filter_1 = require("../common/filter/http-exception.filter");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
const uploadPath = './uploads/';
if (!(0, fs_1.existsSync)(uploadPath)) {
    (0, fs_1.mkdirSync)(uploadPath, { recursive: true });
}
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    create(newUser) {
        return this.userService.create(newUser);
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(+id);
    }
    getError() {
        throw new common_1.HttpException('User error', common_1.HttpStatus.BAD_REQUEST);
    }
    update(id, updatedData) {
        return this.userService.update(+id, updatedData);
    }
    remove(id) {
        return this.userService.remove(+id);
    }
    uploadImage(id, file) {
        if (!file) {
            throw new common_1.HttpException('No image uploaded', common_1.HttpStatus.BAD_REQUEST);
        }
        const imagePath = `/uploads/${file.filename}`;
        this.userService.update(+id, { image: imagePath });
        return {
            message: 'Image uploaded successfully',
            image: imagePath,
            userId: +id,
        };
    }
    getUserImage(id) {
        const user = this.userService.findOne(+id);
        if (!user || !user.image) {
            throw new common_1.HttpException('Image not found', common_1.HttpStatus.NOT_FOUND);
        }
        return {
            userId: +id,
            image: user.image,
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('error'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getError", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/upload-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: uploadPath,
            filename: (req, file, cb) => {
                const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
                cb(null, `user-${uniqueName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|webp)$/)) {
                return cb(new common_1.HttpException('Only image files are allowed!', common_1.HttpStatus.BAD_REQUEST), false);
            }
            cb(null, true);
        },
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Get)(':id/image'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserImage", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_gaurd_1.RoleGuard),
    (0, roles_decorator_1.Roles)('admin'),
    (0, common_1.UseInterceptors)(response_interceptor_1.ResponseInterceptor),
    (0, common_1.UseFilters)(http_exception_filter_1.ErrorFilter),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map