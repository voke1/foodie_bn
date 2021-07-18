export declare class ResponseService {
    serverError(res: any, message: any): Promise<any>;
    clientError(res: any, message: any, status?: number): Promise<any>;
    requestSuccessful(res: any, payload: any, status?: number): Promise<any>;
}
