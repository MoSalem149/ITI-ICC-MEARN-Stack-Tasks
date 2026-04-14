import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  // User Array
  users: User[] = [
    {
      id: 1,
      firstName: 'mohamed',
      lastName: 'salem',
      age: 23,
      email: 'salem@gmail.com',
      password: 'pass123',
      courses: [],
      image: '',
    },
  ];

  // Return all users
  findAll() {
    return this.users;
  }

  // Return one user
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  // Create new user
  create(newUser: CreateUserDto) {
    // Make ID Incremental
    const nextId = this.users.length + 1;

    // Check for dublicate emails
    const dublicateEmail = this.users.find(
      (user) => user.email === newUser.email,
    );
    if (dublicateEmail) return 'Email exists';

    // Add user
    const user: User = {
      id: nextId,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      age: newUser.age,
      email: newUser.email,
      password: newUser.password,
      courses: (newUser.courses ?? []).map(
        (courseId) => new Types.ObjectId(courseId),
      ),
      image: '',
    };
    this.users.push(user);
    return user;
  }

  // Update user
  update(id: number, updatedData: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'User not found';

    Object.assign(user, updatedData);
    return user;
  }

  // Remove user
  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return 'User not found';

    const deletedUser = this.users[index];
    this.users.splice(index, 1);
    return deletedUser;
  }
}
