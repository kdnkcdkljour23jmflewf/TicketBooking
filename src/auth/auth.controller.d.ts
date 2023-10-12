import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(userData: any): Promise<string>;
    userlogin(credentials: {
        email: string;
        password: string;
    }): Promise<any>;
}
