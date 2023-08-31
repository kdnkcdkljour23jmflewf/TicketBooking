import { Injectable, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from '../auth/auth.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoginuserService {
    constructor(
        private readonly userservice : AuthService,
        // private readonly userrepository : Repository<Auth>
    ){
    }
    
    async updateprofile(id:number,userData: any): Promise<string>{
        return this.userservice.updateUser(id, userData)
    }
}
