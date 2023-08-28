import { Injectable, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { Auth } from '../auth.entity';

@Injectable()
export class LoginuserService {
    
    
    async updateprofile(userData: any): Promise<string>{
        // return this.userService.updateUser(id, updatedData);
        console.log(4444333)
        console.log(userData)
        return ''
    }
}
