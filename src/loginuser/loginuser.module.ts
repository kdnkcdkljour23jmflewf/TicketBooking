import { Module } from '@nestjs/common';
// import { LoginuserController } from './loginuser/loginuser.controller';
import { LoginUserController } from './loginuser.controller';
import { LoginuserService } from './loginuser.service';
import { JwtUtilService } from '../auth/jwt.service';
import { AuthModule } from '../auth/auth.module';


@Module({
  controllers: [LoginUserController],
  imports: [AuthModule],
  // providers: [LoginuserService,JwtUtilService]
  providers: [LoginuserService]
})
export class LoginuserModule {}
   