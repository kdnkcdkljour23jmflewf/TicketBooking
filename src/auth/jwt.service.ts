import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtUtilService {
  constructor(private readonly jwtService: JwtService) {}

  decodeToken(token: string) {
    try {
        console.log('token')
        console.log(token)
                
      return this.jwtService.decode(token);
    } catch (error) {
      return 'error;' // Token is invalid or expired
    //   return 'invalid'; // Token is invalid or expired
    }
  }
}
