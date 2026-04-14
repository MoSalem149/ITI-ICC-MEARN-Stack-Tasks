export declare class UserService {
    users: {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    }[];
    findAll(): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    }[];
    findOne(id: number): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
    } | undefined;
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
}
