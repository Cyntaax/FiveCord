import { DiscordToken } from "../classes/DiscordToken";
import { WebsocketManager } from "../managers/ws";
import { DiscordUser } from "../classes/DiscordUser";
import { Print } from "../utils/print";
import { Snowflake } from "../classes/snowflake";
import { EventManager } from "../managers/event";
import { OnReadyEventData } from "../events/ready";
import { HttpManager } from "../managers/http";

export enum BotEvent {
    READY,

}

export enum StatusType {
    ONLINE,
    DND,
    IDLE
}

export enum PresenceType {
    PLAYING,
    LISTENING
}

export class Client {
    private _hm: HttpManager = new HttpManager()
    private _em: EventManager = new EventManager()
    private _wsm: WebsocketManager = new WebsocketManager(this._em)
    private _token: DiscordToken
    user: DiscordUser | undefined;
    ready: boolean | undefined
    constructor(token: DiscordToken) {
        this._token = token;
        this._hm.setToken(this._token.token);
        this.onReady = this._em.onReady.bind(this._em);
    }

    onReady : (cb: (e : OnReadyEventData) => void) => void

    login() : void {
        this._wsm.start(this._token.token, this)
    }

    setStatus(game: string, status_type: StatusType, presence_type: PresenceType) {
        let game_sting: string;
        let is_idle: boolean;
        let presence_num: number;
        switch (status_type) {
            case StatusType.ONLINE:
                game_sting = "online";
                is_idle = false;
                break;
            case StatusType.DND:
                game_sting = "dnd";
                is_idle = false;
                break;
            case StatusType.IDLE:
                game_sting = "idle";
                is_idle = true;
                break;
            default:
                game_sting = "online";
                is_idle = false;
                break;
        }
        switch (presence_type) {
            case PresenceType.PLAYING:
                presence_num = 0;
                break;
            case PresenceType.LISTENING:
                presence_num = 2;
                break;
            default:
                presence_num = 0;
                break;
        }
        this._wsm.updatePresence(game, game_sting, presence_num, is_idle)
    }

    Guild = class {
        id: Snowflake;
        data: any;
        constructor(id: Snowflake) { 
            this.id = id; 
            // this.data = 
        }


    }

}