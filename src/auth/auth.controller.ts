// src/app.controller.ts
import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInDto } from './dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.appService.createUser(createUserDto);
    return { message: 'User created successfully', user: newUser };
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    const signInResult = await this.appService.signIn(signInDto);
    return { message: signInResult.message, success: signInResult.success };
  }

  @Get('getAllcandidates')
  async findAllUsers() {
    console.log("getAllCandidates endpoint called"); // Log at the start of the endpoint
    const listUsers = await this.appService.findAllUsers();
    console.log("Returning users: ", listUsers); // Log the returned users
    return { listUsers };
  }


// delete
@Delete('')
async DeleteUser(){

}
}