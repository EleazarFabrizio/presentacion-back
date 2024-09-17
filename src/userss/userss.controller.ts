import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserssService } from './userss.service';
import { CreateUserssDto } from './dto/create-userss.dto';
import { UpdateUserssDto } from './dto/update-userss.dto';

@Controller('/userss')
export class UserssController {
  constructor(private readonly userssService: UserssService) {}

  @Post()
  async create(@Body() createUserssDto: CreateUserssDto) {
    return this.userssService.create(createUserssDto);
  }

  @Get()
  async findAll() {
    return this.userssService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userssService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserssDto: UpdateUserssDto) {
    return this.userssService.update(+id, updateUserssDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userssService.remove(+id);
  }
}
