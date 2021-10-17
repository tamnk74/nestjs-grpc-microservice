import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from 'src/modules/users';
import { AppController } from './controllers';
import { LoggerModule } from 'src/common/logger';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule, UserModule],

  controllers: [AppController],
})
export class AppModule {}
