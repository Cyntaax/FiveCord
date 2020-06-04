import { DiscordToken } from "../classes/DiscordToken";
import { Snowflake } from "../classes/snowflake";
import { OnReadyEventData } from "../events/ready";
import { HttpManager } from "../managers/http";
import { OnMessageEventData } from "../events/message";
import { DiscordUser } from "../classes/DiscordUser";
export declare enum BotEvent {
    READY = 0,
    MESSAGE_CREATE = 1
}
export declare enum StatusType {
    ONLINE = 0,
    DND = 1,
    IDLE = 2
}
export declare enum PresenceType {
    PLAYING = 0,
    LISTENING = 1
}
export declare class Client {
    readonly hm: HttpManager;
    private _em;
    private _wsm;
    private _token;
    user: DiscordUser;
    ready: boolean | undefined;
    constructor(token: DiscordToken);
    onReady: (cb: (e: OnReadyEventData) => void) => void;
    onMessage: (cb: (e: OnMessageEventData) => void) => void;
    login(): void;
    setStatus(game: string, status_type: StatusType, presence_type: PresenceType): void;
    Guild: {
        new (id: Snowflake): {
            id: Snowflake;
            data: any;
        };
    };
}
