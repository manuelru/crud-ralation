import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

  constructor(
    @InjectRepository(Profile)
    private ProfilesRepository: Repository<Profile>
  ) { }


  async create(createProfileDto: CreateProfileDto) {
    return this.ProfilesRepository.save(createProfileDto);
  }

  findAll() {
    return this.ProfilesRepository.find();
  }

  findOne(id: number) {
   const profile = this.ProfilesRepository.findOne({ where: {id}});
    return profile;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.ProfilesRepository.update(id,updateProfileDto);
  }

  remove(id: number) {
    return this.ProfilesRepository.delete(id);
  }
}
