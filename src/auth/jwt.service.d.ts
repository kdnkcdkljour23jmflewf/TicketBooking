import { JwtService } from '@nestjs/jwt';
export declare class JwtUtilService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decodeToken(token: string): string | {
        [key: string]: any;
    };
}
