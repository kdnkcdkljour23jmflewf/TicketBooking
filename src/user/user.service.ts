import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { hash } from 'bcrypt';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>) {}


  async register(userDto: any): Promise<string> {

    // const userRepository = this.userRepository.create(userDto);


    const { username, email, password } = userDto;

    const hashedPassword = await hash(password, 10);

    const user = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    this.userRepository.save(user);
    return 'User registered successfully!';

  }
}
