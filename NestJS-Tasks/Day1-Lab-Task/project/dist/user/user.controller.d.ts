import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(newUser: {
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    }): "Email exists" | {
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        id: number;
    };
    findAll(): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    }[];
    findOne(id: string): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    } | undefined;
}
