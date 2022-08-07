import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ResponseDto } from '../common/dto/global.dto';
import {
  CreateUserDto,
  CreateUserResDto,
  SignInDto,
  SignInSuccessDto,
} from './dto/shared.dto';
import { SharedService } from './shared.service';

@Controller()
export class SharedController {
  constructor(private sharedService: SharedService) {}

  @Post('/signup')
  async signUp(
    @Body() data: CreateUserDto,
  ): Promise<ResponseDto<CreateUserResDto>> {
    const response = await this.sharedService.createUser(data);

    return {
      statusCode: HttpStatus.OK,
      message: 'Successfully created user!',
      data: response,
    };
  }

  @Post('/login')
  async signIn(
    @Body() data: SignInDto,
  ): Promise<ResponseDto<SignInSuccessDto>> {
    const response = await this.sharedService.verifySignIn(data);

    return {
      statusCode: HttpStatus.OK,
      message: 'Verified user successfully',
      data: response,
    };
  }

  @Get('/file')
  readFile() {
    const response = this.sharedService.readFiles();

    return response;
  }
}
