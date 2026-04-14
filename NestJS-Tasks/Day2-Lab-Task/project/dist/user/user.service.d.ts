export declare class UserService {
    users: {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    }[];
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
    findOne(id: number): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    } | undefined;
    create(newUser: {
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
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
    update(id: number, updatedData: {
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
    remove(id: number): {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        password: string;
        courses: any[];
        image?: string;
    } | "User not found";
}
