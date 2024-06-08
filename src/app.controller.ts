// src/app.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './signIn/signin.dto';
import { SignInDto } from './signIn/signin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.appService.createUser(createUserDto);
    return { message: 'User created successfully', user: newUser };
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    const signInResult = await this.appService.signIn(signInDto);
    return { message: signInResult.message };
  }
}
