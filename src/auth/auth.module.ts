import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserssModule } from 'src/userss/userss.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { UserssService } from 'src/userss/userss.service';

@Module({
  imports: [UserssModule,
    JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions: {expiresIn: '60s'},
  })],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
