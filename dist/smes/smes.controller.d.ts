import { SmeService } from './smes.service';
import { Sme } from './interfaces/sme.interface';
export declare class SmeController {
    private readonly SmeService;
    constructor(SmeService: SmeService);
    createSME(Sme: Sme, req: any, res: any): Promise<Sme>;
    findSmes(req: any, res: any): Promise<Sme[]>;
    findSme(SmeId: any, req: any, res: any): Promise<Sme[]>;
    updateSme(smeId: any, Sme: any, req: any, res: any): Promise<Sme>;
    delete(id: any): Promise<Sme>;
}
