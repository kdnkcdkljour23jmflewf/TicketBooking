import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private usersRepository: Repository<Auth>,
    private jwtService: JwtService, // Add this line to inject JwtService
  ) {}
  async register(userDto: any): Promise<string> {

    const userRepository2 = this.usersRepository.create(userDto);


    const { username, email, password } = userDto;


    const hashedPassword = await hash(password, 10);

    const user = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    this.usersRepository.save(user);
    return 'User registered successfully!';

  }

  async login(email: string, password: string): Promise<any> {
    // console.log('params')
    // console.log(params.email)
    // var email = params.email
    //  email = {'email':email}
    const user = await this.usersRepository.findOne({ where:{email} });
    
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
  
    // const payload = { email: user.email, id: user.id };
    // console.log(payload);
    
    // const token = this.jwtService.sign(payload);

    // return { token };
    return user;
  }
  async generateToken(email: string): Promise<{ accessToken: any }> {
    const payload: JwtPayload = { email: email}
    // const accessToken = 1111
    const accessToken = this.jwtService.sign(payload,{ secret: 'your-secret-key' })
    // return {'d'};
    return { accessToken };
  
  }

  async getUserByEmail(email:string):Promise<any> {
    const user = await this.usersRepository.findOne({ where:{email} });   
    return user;
  }
}