"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
let UserService = class UserService {
    users = [
        {
            id: 1,
            firstName: 'mohamed',
            lastName: 'salem',
            age: 23,
            email: 'salem@gmail.com',
            password: 'pass123',
            courses: [],
        },
    ];
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find((user) => user.id === id);
    }
    create(newUser) {
        const nextId = this.users.length + 1;
        const dublicateEmail = this.users.find((user) => user.email === newUser.email);
        if (dublicateEmail)
            return 'Email exists';
        const user = { id: nextId, ...newUser };
        this.users.push(user);
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map