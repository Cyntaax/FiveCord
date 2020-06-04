import { DiscordUser } from "../classes/DiscordUser";
import { Guild } from "../classes/guild";
import { Channel } from "../classes/channel";
import { Message } from "../classes/message";
import { Client } from "../client/Client";
export declare class OnMessageEventData {
    message: Message;
    sender: DiscordUser;
    channel: Channel;
    guild: Guild;
    private _client;
    constructor(message: Message, sender: DiscordUser, channel: Channel, guild: Guild, client: Client);
    reply(content: string): any;
}
