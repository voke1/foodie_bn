import { JwtService } from '@nestjs/jwt';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    static shuffleToken(token: any): Promise<any>;
    static getToken(payload: any, expiresIn?: string): Promise<any>;
    static verifyToken(token: any): Promise<void>;
    static checkToken(token: any): Promise<void>;
}
