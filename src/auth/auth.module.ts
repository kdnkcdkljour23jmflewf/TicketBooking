import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';



@Module({
  imports: [TypeOrmModule.forFeature([Auth]),JwtModule],
  exports: [TypeOrmModule, AuthService],
  controllers: [AuthController],
  providers: [AuthService,JwtService]
})
export class AuthModule {}