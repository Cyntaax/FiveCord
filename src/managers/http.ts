import { DiscordToken } from "../classes/DiscordToken";

const axios = require('axios');

export enum ReqType {
    GET,
    POST
}

export class HttpManager {
    token: string | undefined;
    discord_api_url: string = "https://discord.com/api";
    constructor() { }

    setToken(token: string) {
        this.token = token;
    }

    req(type: ReqType, endpoint: string) {
        switch (type) {
            case ReqType.GET:
                return this.get(endpoint);
            case ReqType.POST:
                return this.post(endpoint);
            default:
                break;
        }
    }

    private get(endpoint: string) {
        axios.get(this.discord_api_url + endpoint, {}, { headers: { 'Authorization' : 'Bot ' + this.token }}).then(function (responce: any) {
            return responce;
        });
    }

    private post(endpoint: string) {
        axios.post(this.discord_api_url + endpoint, {}, { headers: { 'Authorization' : 'Bot ' + this.token }}).then(function (responce: any) {
            return responce;
        });
    }
}