import { UserService } from './user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UserService);
    registerUser(userData: any): Promise<string>;
}
