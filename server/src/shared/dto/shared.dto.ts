import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'username of CreateUser request' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'firstname of CreateUser request' })
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'lastname of CreateUser request' })
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'authentication id of CreateUser request' })
  auth_id: string;

  @IsString()
  @ApiProperty({ description: 'user token of CreateUser request' })
  token: string;
}

export class CreateUserResDto {
  @ApiProperty({ description: 'id of the returned user' })
  @IsNumber()
  id: number;

  @IsString()
  @ApiProperty({ description: 'username of the returned user' })
  username: string;

  @IsString()
  @ApiProperty({ description: 'firstname of the returned user' })
  firstname: string;

  @IsString()
  @ApiProperty({ description: 'lastname of the returned user' })
  lastname: string;

  @IsString()
  @ApiProperty({ description: 'authentication id of the returned user' })
  auth_id: string;
}

export class SignInDto {
  @ApiProperty({ description: 'username of the user' })
  @IsString()
  username: string;

  @ApiProperty({ description: 'token of the user' })
  @IsString()
  token: string;
}

export class SignInSuccessDto {
  @ApiProperty({ description: 'response value of the sign in' })
  @IsBoolean()
  verified: true;

  @ApiProperty({ description: 'token of the verified user' })
  @IsString()
  token: string;
}
