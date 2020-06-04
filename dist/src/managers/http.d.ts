import { AxiosRequestConfig } from 'axios';
export declare class HttpManager {
    private _token;
    private axios_instance;
    constructor();
    set token(token: string);
    get token(): string;
    req<T, R>(method: AxiosRequestConfig["method"], endpoint: string, _data?: R | any): Promise<T | undefined>;
}
