import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserssModule } from './userss/userss.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userss } from './userss/entities/userss.entity';
import { UserssController } from './userss/userss.controller';
import { UserssService } from './userss/userss.service';
import { AuthModule } from './auth/auth.module';
import { SendyController } from './sendy/sendy.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Userss]),UserssModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [Userss],
    synchronize: true,
  }), AuthModule],
  controllers: [AppController, UserssController, SendyController],
  providers: [AppService, UserssService],
})
export class AppModule {}
