import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserssService } from 'src/userss/userss.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserssService,
        private jwtService: JwtService
      ) {}
    
      async signIn(
        Id: number,
        Nombre: string,
        pass: string
      ): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(Id);
        const payload = { sub: user.id, username: user.Nombre };
        console.log(payload);
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }

      
}