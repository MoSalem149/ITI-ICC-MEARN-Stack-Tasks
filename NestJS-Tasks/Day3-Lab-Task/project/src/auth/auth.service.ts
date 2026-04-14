import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<any> {
    const user = this.userService.create(createUserDto);

    if (user === 'Email exists') {
      throw new UnauthorizedException('Email already exists');
    }

    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: 'admin',
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      ...payload,
      token,
    };
  }

  async signIn(email: string, pass: string): Promise<any> {
    const user = this.userService.users.find((u) => u.email === email);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: 'admin',
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      ...payload,
      token,
    };
  }
}
