import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; // import your JwtStrategy
import { JwtUtilService } from './jwt.service'; // import your JwtStrategy


@Module({
  imports: [TypeOrmModule.forFeature([Auth]),JwtModule],
  exports: [TypeOrmModule, AuthService,JwtModule,JwtUtilService],
  controllers: [AuthController],
  providers: [AuthService,JwtService,JwtStrategy,JwtUtilService]
})
export class AuthModule {}
