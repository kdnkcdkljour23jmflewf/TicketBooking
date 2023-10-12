import { AuthService } from '../auth/auth.service';
export declare class LoginuserService {
    private readonly userservice;
    constructor(userservice: AuthService);
    updateprofile(id: number, userData: any): Promise<string>;
}
