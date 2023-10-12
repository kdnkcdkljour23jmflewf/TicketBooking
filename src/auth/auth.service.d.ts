import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<Auth>, jwtService: JwtService);
    register(userDto: any): Promise<string>;
    login(email: string, password: string): Promise<any>;
    generateToken(email: string): Promise<{
        accessToken: any;
    }>;
    getUserByEmail(email: string): Promise<any>;
    updateUser(id: number, userData: any): Promise<any>;
}
