import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUser } from 'src/dtos/users.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a #${id} user';
  }

  @Post()
  @ApiBody({ type: CreateUser })
  async createUser(@Body() createUserDto: CreateUser) {
    // You can use createUserDto to create a new user
    return (
      'Hi, my user name is ' +
      createUserDto.name +
      ' and my email is ' +
      createUserDto.email +
      ". Don't tell anyone that my password is " +
      createUserDto.password +
      '.'
    );
  }
}
