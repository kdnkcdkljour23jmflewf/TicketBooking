import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { LoginuserService } from './loginuser.service';
// import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('loginuser')
export class LoginUserController {
  constructor(private readonly userService: LoginuserService) {}

  @Put('updateprofile')
  @UseGuards(JwtAuthGuard)
  async registerUser(@Body() userData: any): Promise<any> {
   console.log(55555)
     
  }
}
