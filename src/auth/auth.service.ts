import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './UserEnity/user.entity';
import { CreateUserDto } from './dto/create-user.dto'; 
import { SignInDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    // if user exist
    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('This Email already exists');
    }
    const newUser = this.userRepository.create({ username, email, password });
    return await this.userRepository.save(newUser);
  }

  async signIn(signInDto: SignInDto): Promise<{ success: boolean; message: string }> {
    const { email, password } = signInDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (user && user.password === password) {
      return { success: true, message: "Sign in success" };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  }
  async findAllUsers(): Promise<User[]> {
    console.log("findAllUsers method called"); // Log at the start of the method
    const users = await this.userRepository.find();
    console.log("userlist=========", users); // Log the list of users
    return users;
  }
}
