import { DiscordUser } from "../classes/DiscordUser";
export declare class OnReadyEventData {
    user: DiscordUser;
    session: string;
    guilds: Array<any>;
    constructor(user: DiscordUser, session: string, guilds: Array<any>);
}
