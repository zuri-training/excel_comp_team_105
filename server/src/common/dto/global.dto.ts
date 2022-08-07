import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseDto<T> {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'status code of the response' })
  statusCode: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'message body of the response' })
  message: string;

  @IsNotEmpty()
  @ApiProperty({ description: 'data of the response' })
  data: T;
}
