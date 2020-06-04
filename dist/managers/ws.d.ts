import { Client } from '../client/Client';
import { HeartbeatManager } from './heartbeat';
import { EventManager } from './event';
export declare class WebsocketManager {
    ws: any;
    em: EventManager;
    hbm: HeartbeatManager;
    constructor(em: EventManager);
    start(token: string, client: Client): void;
    kill(): void;
    updatePresence(game: string, status: string, type: number, afk?: boolean): void;
}
