// src/user/dto/create-user.dto.ts
export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

// src/user/dto/signin.dto.ts
export class SignInDto {
  email: string;
  password: string;
}
