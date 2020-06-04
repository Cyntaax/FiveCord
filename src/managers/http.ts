import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'

export class HttpManager {
    private _token!: string
    private axios_instance!: AxiosInstance;
    constructor() { }

    set token(token: string) {
        this._token = token
        this.axios_instance = axios.create({
            baseURL: 'https://discord.com/api',
            headers: { "Authorization" : 'Bot ' + this._token }
        })
    }

    get token(): string {
        return this._token
    }

    async req<T, R>(method: AxiosRequestConfig["method"], endpoint: string, _data?: R | any): Promise<T | undefined> {
        try {
            const reqObj = method === 'GET' ?  { method, url: endpoint } : { method, url: endpoint, data: _data }
            const { data } = await this.axios_instance.request<any, T | any>(reqObj)
            return data
        } catch(e) {
            const d = e as AxiosError
            console.log(d.response)
        }
    }
}
