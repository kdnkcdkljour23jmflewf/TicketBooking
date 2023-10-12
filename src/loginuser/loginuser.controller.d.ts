import { LoginuserService } from './loginuser.service';
import { JwtUtilService } from '../auth/jwt.service';
export declare class LoginUserController {
    private readonly loginuserservice;
    private readonly jwtutilservice;
    constructor(loginuserservice: LoginuserService, jwtutilservice: JwtUtilService);
    updateprofile(id: number, updatedUser: any): Promise<any>;
}
