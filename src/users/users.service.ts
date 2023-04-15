import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { CreateProfileDto } from 'src/profiles/dto/create-profile.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
   
    @InjectRepository(Profile)
    private ProfilesRepository: Repository<Profile>
    ) { }


  async create(createUserDto: CreateUserDto, createProfileDto: CreateProfileDto) {
    await this.UsersRepository.save(createUserDto);
    await this.ProfilesRepository.save(createProfileDto);
     return;
  }


  findAll() {
    return this.UsersRepository.find({
      relations: {
          profile: true,
      },
  })
  }

  findOne(id: number) {
    const user = this.UsersRepository.findOne({ where: {id}});
    return user;;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.UsersRepository.update(id,updateUserDto);
  }

  remove(id: number) {
    return this.UsersRepository.delete(id);
  }
}
