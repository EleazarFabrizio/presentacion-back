import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserssDto } from './dto/create-userss.dto';
import { UpdateUserssDto } from './dto/update-userss.dto';
import { Userss } from './entities/userss.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserssService {

  @InjectRepository(Userss)
  private userRepository: Repository<Userss>

  

  public async create(createUserssDto: CreateUserssDto) {
    try {
      const HashedPassword = await this.hashPassword(createUserssDto.Password)
      console.log(HashedPassword)
      await this.userRepository.save(createUserssDto);
      return {
        statusCode:200,
        msg: 'Se realizó con éxito la inserción',
      };
    }
    catch (error){
      return new BadRequestException(error);
    }
    };

  public async findAll() {
    return await this.userRepository.find();
  }

  public async findOne(id: number) {
    return await this.userRepository.findOneBy({id:id});;
  }

  public async update(id: number, updateUserssDto: UpdateUserssDto) {
    await this.userRepository.update(id,updateUserssDto);
  }

  public async remove(id: number) {
    await this.userRepository.delete(id);
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
    }

  async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
    }
}
