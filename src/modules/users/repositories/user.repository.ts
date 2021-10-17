import { BaseRepository } from 'src/common/repositories';
import { EntityRepository } from 'typeorm';
import { UserEntity } from '../entities';

@EntityRepository(UserEntity)
export class UserRepository extends BaseRepository<UserEntity> {}
