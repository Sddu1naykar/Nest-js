// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './signIn/signin.dto';
import { SignInDto } from './signIn/signin.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

// creates user (signup)
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    const newUser = this.userRepository.create({ username, email, password });
    return await this.userRepository.save(newUser);
  }
// signin
  async signIn(signInDto: SignInDto): Promise<{ success: boolean; message: string }> {
    const { email, password } = signInDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && user.password === password) {
      return { success: true, message: "Sign in success" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  }
}
