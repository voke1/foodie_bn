import { UserService } from './user.service';
import { User } from './interfaces/user.interface';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    Signup(user: User, req: any, res: any): Promise<User>;
    Signin(user: User, req: any, res: any): Promise<User>;
    findProfile(id: any, req: any, res: any): Promise<User>;
    searchProfile(phone: any, user: any, req: any, res: any): Promise<User>;
    updateProfile(id: any, user: any, req: any, res: any): Promise<User>;
}
