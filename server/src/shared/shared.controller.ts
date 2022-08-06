import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { CreateUserDto } from './dto/shared.dto';
import { SharedService } from './shared.service';

@Controller()
export class SharedController {
  constructor(private sharedService: SharedService) {}

  @Post('/signup')
  signUp(@Body() data: CreateUserDto): Promise<User> {
    return this.sharedService.createUser(data);
  }
}
