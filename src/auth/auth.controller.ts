import { Controller,Get,Post,Body } from '@nestjs/common'
import {AuthService} from './auth.service'


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    async registerUser(@Body() userData: any): Promise<string> {
      const result = await this.authService.register(userData);
      return result;
    }

    @Post('login')
    async userlogin(@Body() credentials: { email: string; password: string }): Promise<any> {
        const result = await this.authService.login(credentials.email,credentials.password);

        const response = await this.authService.generateToken(result)
        let user = {
          'user':result,
          'token':response
        }
        return user
    }
}
