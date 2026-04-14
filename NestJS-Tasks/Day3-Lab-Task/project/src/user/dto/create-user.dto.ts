import {
  IsArray,
  IsEmail,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  age!: number;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsArray()
  @IsMongoId({ each: true })
  courses!: string[];
}
