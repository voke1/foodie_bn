import { Sme } from './interfaces/sme.interface';
import { Model } from 'mongoose';
import { ResponseService } from '../utils/response-handler.service';
export declare class SmeService {
    private SmeModel;
    private responseService;
    constructor(SmeModel: Model<Sme>, responseService: ResponseService);
    createSme(Sme: any, res: any): Promise<any>;
    getSme(SmeId: any, res: any): Promise<Sme[]>;
    getSmes(res: any): Promise<[]>;
    updateSme(Sme: any, id: any, res: any): Promise<Sme>;
    deleteSme(id: string): Promise<Sme>;
}
