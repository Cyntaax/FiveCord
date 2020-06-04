import { Client, BotEvent } from "../client/Client";
import { OnReadyEventData } from "../events/ready";
import { OnMessageEventData } from "../events/message";
export declare class EventManager {
    onReadyCallback: Function | undefined;
    onMessageCallback: Function | undefined;
    new(event: BotEvent, data: any, client: Client): void;
    onReady(cb: (e: OnReadyEventData) => void): void;
    onMessage(cb: (e: OnMessageEventData) => void): void;
}
