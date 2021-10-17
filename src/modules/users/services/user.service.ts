import { Injectable } from '@nestjs/common';
import { PostgresTransactionalRepository } from 'src/database/postgres';
import { RegisterUserInput } from '../dtos';
import { UserEntity } from '../entities';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private pgTransactionRepo: PostgresTransactionalRepository) {}

  get userRepository(): UserRepository {
    return this.pgTransactionRepo.getRepository(
      UserRepository,
    ) as UserRepository;
  }

  async findOne(userId: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne(userId);
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });
  }

  async isValidToken(token: string): Promise<boolean> {
    return !!token;
  }

  async registerUser(registerInput: RegisterUserInput): Promise<UserEntity> {
    return this.userRepository.create(registerInput);
  }
}
