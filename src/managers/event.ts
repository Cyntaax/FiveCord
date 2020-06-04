import { Print } from "../utils/print";
import { Client, BotEvent } from "../client/Client";
import { OnReadyEventData } from "../events/ready";
import { DiscordUser } from "../classes/DiscordUser";
import { Snowflake } from "../classes/snowflake";
import { OnMessageEventData } from "../events/message";
import { Message } from "../classes/message";
import { Channel } from "../classes/channel";
import { Guild } from "../classes/guild";

export class EventManager {

    onReadyCallback: Function | undefined;
    onMessageCallback: Function | undefined;

    new(event: BotEvent, data: any, client: Client) {
        switch (event) {
            case BotEvent.READY:
                this.onReadyCallback && this.onReadyCallback(new OnReadyEventData(new DiscordUser(data.user.username, data.user.discriminator, new Snowflake(parseInt(data.user.id))), data.session_id, data.guilds))
                break;
            
            case BotEvent.MESSAGE_CREATE:
                if(data.author.id != client.user.id.id) {
                    let message = new Message(new Snowflake(data.id), data.content, data.embeds, data.attachments);
                    let sender = new DiscordUser(data.author.username, data.author.discriminator, new Snowflake(data.id))
                    let channel =  new Channel(new Snowflake(data.channel_id))
                    let guild = new Guild(new Snowflake(data.guild_id))
                    this.onMessageCallback && this.onMessageCallback(new OnMessageEventData(message, sender, channel, guild, client))
                }
                break;

            default:
                break;
        }
    }

    onReady(cb: (e : OnReadyEventData) => void) {
        this.onReadyCallback = cb;
    }

    onMessage(cb: (e: OnMessageEventData) => void) {
        this.onMessageCallback = cb;
    }
}