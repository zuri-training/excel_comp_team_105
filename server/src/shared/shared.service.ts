import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from './dto/shared.dto';

@Injectable()
export class SharedService {
  async createUser(data: CreateUserDto): Promise<User> {
    const user = User.create({ ...data });
    await user.save();

    return user;
  }
}
