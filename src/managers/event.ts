import { Print } from "../utils/print";
import { Client, BotEvent } from "../client/Client";
import { OnReadyEventData } from "../events/ready";
import { DiscordUser } from "../classes/DiscordUser";
import { Snowflake } from "../classes/snowflake";

export class EventManager {

    onReadyCallback: any;

    new(event: BotEvent, data: any, client: Client) {
        switch (event) {
            case BotEvent.READY:
                this.onReadyCallback && this.onReadyCallback(new OnReadyEventData(new DiscordUser(data.user.username, data.user.discriminator, new Snowflake(parseInt(data.user.id))), data.session_id, data.guilds))
                break;
        
            default:
                break;
        }
    }

    onReady(cb: (e : OnReadyEventData) => void) {
        this.onReadyCallback = cb;
    }
}