import { Controller, Get,Patch, Put, Body, UseGuards, Request,Param } from '@nestjs/common';
import { LoginuserService } from './loginuser.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { JwtUtilService } from '../auth/jwt.service';

@Controller('loginuser')
export class LoginUserController {
  constructor(
    private readonly loginuserservice: LoginuserService,
    private readonly jwtutilservice: JwtUtilService
  ) {}

  @UseGuards(JwtAuthGuard)
  
  // @Patch(':id')
 /*  @Get('updateprofile')
  async updateprofile(
    @Body() userData: any,
    @Request() request: any
    ): Promise<any> {
    this.loginuserservice.updateprofile(userData)
    let token = request.headers.authorization.replace('Bearer','')
    console.log('token')
    console.log(token)
    let decodetoken = this.jwtutilservice.decodeToken(token)
    console.log('decodetokenooo')
    console.log(decodetoken)
  } */
  @Patch('updateuser/:id')
  async updateprofile(
    @Param('id') id: number,
    @Body() updatedUser: any
    ): Promise<any> {
      console.log(id);
      console.log(updatedUser);
      this.loginuserservice.updateprofile(id,updatedUser)
  }
} 
