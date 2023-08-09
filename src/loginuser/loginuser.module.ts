import { Module } from '@nestjs/common';
// import { LoginuserController } from './loginuser/loginuser.controller';
import { LoginUserController } from './loginuser.controller';
import { LoginuserService } from './loginuser.service';

@Module({
  controllers: [LoginUserController],
  providers: [LoginuserService]
})
export class LoginuserModule {}
