import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength } from 'class-validator';

export class CreateUser {
  @IsString()
  @MinLength(4)
  @ApiProperty({ description: 'User name', default: 'Marina' })
  name: string;

  @IsEmail()
  @ApiProperty({ description: 'User email', default: 'marina@email.com' })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({ description: 'User password', default: '12345678' })
  password: string;
}

export class LoginUser {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
