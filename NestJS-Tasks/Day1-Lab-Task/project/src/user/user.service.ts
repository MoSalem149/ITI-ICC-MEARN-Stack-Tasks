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
  }[] = [
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
  }) {
    // Make ID Incremental
    const nextId = this.users.length + 1;

    // Check for dublicate emails
    const dublicateEmail = this.users.find(
      (user) => user.email === newUser.email,
    );
    if (dublicateEmail) return 'Email exists';

    // Add use
    const user = { id: nextId, ...newUser };
    this.users.push(user);
    return user;
  }
}
