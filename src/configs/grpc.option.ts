import { ConfigService } from '@nestjs/config';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions = (
  configService: ConfigService,
): ClientOptions => ({
  transport: Transport.GRPC,
  options: {
    package: 'user',
    protoPath: join(__dirname, '../modules/users/protos/user.proto'),
    url: configService.get('USER_SERVICE_URL'),
  },
});
