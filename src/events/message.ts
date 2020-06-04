import { DiscordUser } from "../classes/DiscordUser";
import { Guild } from "../classes/guild";
import { Channel } from "../classes/channel";
import { Message } from "../classes/message";
import { HttpManager } from "../managers/http";
import { Client } from "../client/Client";

export class OnMessageEventData {

    message: Message;
    sender: DiscordUser;
    channel: Channel;
    guild: Guild;
    private _client: Client;

    constructor(message: Message, sender: DiscordUser, channel: Channel, guild: Guild, client: Client) {
        this.message = message;
        this.sender = sender;
        this.channel = channel;
        this.guild = guild;
        this._client = client;
    }

    reply(content: string): any {
        let message_data = {
            "content": content,
            "tts": false
        }
        this._client.hm.req("POST", `/channels/${this.channel.id.id}/messages`, message_data).then((v) => {
            return v;
        })
    }

}