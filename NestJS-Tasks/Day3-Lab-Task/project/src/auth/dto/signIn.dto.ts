import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsNotEmpty({ message: 'user email is required' })
  @IsEmail()
  email!: string;

  @IsNotEmpty({ message: 'user password is required' })
  @IsString()
  password!: string;
}
