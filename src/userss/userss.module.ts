import { Module } from '@nestjs/common';
import { UserssService } from './userss.service';
import { UserssController } from './userss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userss } from './entities/userss.entity';

@Module({
  controllers: [UserssController],
  providers: [UserssService],
  imports: [TypeOrmModule.forFeature([Userss])],
  exports:[UserssService]
})
export class UserssModule {}
