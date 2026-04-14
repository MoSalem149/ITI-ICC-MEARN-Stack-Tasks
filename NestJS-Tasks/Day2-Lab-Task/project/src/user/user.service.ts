import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  // User Array
  users: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    courses: any[];
    image?: string;
  }[] = [
    {
      id: 1,
      firstName: 'mohamed',
      lastName: 'salem',
      age: 23,
      email: 'salem@gmail.com',
      password: 'pass123',
      courses: ['JS', 'React', 'Node', 'Nest', 'Mongo'],
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
  create(newUser: {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    courses: any[];
    image?: string;
  }) {
    // Make ID Incremental
    const nextId = this.users.length + 1;

    // Check for dublicate emails
    const dublicateEmail = this.users.find(
      (user) => user.email === newUser.email,
    );
    if (dublicateEmail) return 'Email exists';

    // Add user
    const user = { id: nextId, ...newUser };
    this.users.push(user);
    return user;
  }

  update(
    id: number,
    updatedData: {
      firstName?: string;
      lastName?: string;
      age?: number;
      email?: string;
      password?: string;
      courses?: any[];
      image?: string;
    },
  ) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return 'User not found';

    Object.assign(user, updatedData);
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return 'User not found';

    const deletedUser = this.users[index];
    this.users.splice(index, 1);
    return deletedUser;
  }
}
