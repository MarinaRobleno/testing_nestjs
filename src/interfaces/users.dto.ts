import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUser {
  @IsString()
  @MinLength(4)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}