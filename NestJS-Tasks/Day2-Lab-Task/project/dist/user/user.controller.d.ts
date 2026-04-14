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
        image?: string;
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
        image?: string;
    }[];
    findOne(id: string): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    } | undefined;
    getError(): void;
    update(id: string, updatedData: {
        firstName?: string;
        lastName?: string;
        age?: number;
        email?: string;
        password?: string;
        courses?: any[];
        image?: string;
    }): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    } | "User not found";
    remove(id: string): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    } | "User not found";
    uploadImage(id: string, file: Express.Multer.File): {
        message: string;
        image: string;
        userId: number;
    };
    getUserImage(id: string): {
        userId: number;
        image: string;
    };
}
