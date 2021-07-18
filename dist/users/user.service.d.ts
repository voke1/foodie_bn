import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { ResponseService } from '../utils/response-handler.service';
export declare class UserService {
    private clientModel;
    private responseService;
    constructor(clientModel: Model<User>, responseService: ResponseService);
    signUp(user: any, res: any): Promise<User>;
    signIn(user: any, res: any): Promise<User>;
    getProfile(phone: any, res: any): Promise<User>;
    updateProfile(user: any, id: any, res: any): Promise<User>;
    changePassword(user: any, email: any, res: any): Promise<User>;
}
