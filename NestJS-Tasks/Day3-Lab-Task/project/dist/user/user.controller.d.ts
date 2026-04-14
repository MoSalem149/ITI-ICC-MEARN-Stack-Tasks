import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(newUser: CreateUserDto): import("./entities/user.entity").User | "Email exists";
    findAll(): import("./entities/user.entity").User[];
    findOne(id: string): import("./entities/user.entity").User | undefined;
    getError(): void;
    update(id: string, updatedData: UpdateUserDto): import("./entities/user.entity").User | "User not found";
    remove(id: string): import("./entities/user.entity").User | "User not found";
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
