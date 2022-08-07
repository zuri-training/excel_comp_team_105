import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import {
  CreateUserDto,
  CreateUserResDto,
  SignInDto,
  SignInSuccessDto,
} from './dto/shared.dto';
import * as fs from 'fs';
import * as XLXS from 'xlsx';

// XLXS.set_fs(fs);
@Injectable()
export class SharedService {
  async createUser(data: CreateUserDto): Promise<CreateUserResDto> {
    const { username } = data;
    const checkUsername = await User.findOne({ where: { username: username } });
    if (checkUsername) {
      throw new BadRequestException(`username '${username}' already in use!`);
    }

    const user = User.create({ ...data });
    await user.save();

    return {
      id: user.id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      auth_id: user.auth_id,
    };
  }

  async verifySignIn(data: SignInDto): Promise<SignInSuccessDto> {
    const { username, token } = data;

    const verifyUsername = await User.findOne({
      where: { username: username },
    });

    if (!verifyUsername) {
      throw new BadRequestException(
        `username '${username}' not registered. Please, register and try again.`,
      );
    }

    const verifyUsernameAndToken = await User.findOne({
      where: { username: username, token: token },
    });

    if (!verifyUsernameAndToken) {
      throw new BadRequestException('token is invalid. check and try again.');
    }

    return {
      verified: true,
      token: token,
    };
  }

  readFiles() {
    const file = XLXS.readFile(__dirname + '/file/file.xls');

    return file.Sheets.Sheet1;
  }
}
