import { IsEmail, IsOptional, IsString } from 'class-validator';

export interface EmailInput {
  email: string;
}

export class RegisterUserInput {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
