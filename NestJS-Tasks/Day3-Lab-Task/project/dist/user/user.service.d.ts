import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UserService {
    users: User[];
    findAll(): User[];
    findOne(id: number): User | undefined;
    create(newUser: CreateUserDto): User | "Email exists";
    update(id: number, updatedData: UpdateUserDto): User | "User not found";
    remove(id: number): User | "User not found";
}
