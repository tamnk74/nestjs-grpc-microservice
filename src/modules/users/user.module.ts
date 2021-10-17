/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';
import { PostgresUnitOfWorkModule } from 'src/database/postgres';
import { UserRepository } from './repositories';
import { UserController } from './controllers';

@Module({
  imports: [HttpModule, ConfigModule, PostgresUnitOfWorkModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
