import { Controller, Body,Post,HttpCode,HttpStatus,Get,Param,Request,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.id, signInDto.nombre,signInDto.password);
  }

  @Post('register')
  async register(@Body() body: any) {
    const { username, HashedPassword,password } = body;
    
    
    return { message: 'Usuario registrado correctamente' };
}
    @Post('login')
    async login(@Body() body: any) {
    const { username, password } = body;
}
}
