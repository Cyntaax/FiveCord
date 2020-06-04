import {Print} from '../utils/print';
import { Client, BotEvent } from '../client/Client';
import { DiscordUser } from '../classes/DiscordUser';
import { Snowflake } from '../classes/snowflake';
import { HeartbeatManager } from './heartbeat';
import { EventManager } from './event';

const WebSocket = require('ws');

export class WebsocketManager {
    ws = new WebSocket('wss://gateway.discord.gg/?v=6&encoding=json', {}); // TODO impliment dynamic gateway url getting
    em: EventManager;
    hbm = new HeartbeatManager(0, 0, this.ws)

    constructor(em: EventManager) {
        this.em = em;
    }

    start(token: string, client: Client) {
        let token_formatted: string = "Bot " + token;
        let hi: number = 0;
        let s: number = 0;
        this.ws.on('message', (data: any) => {
            let json = JSON.parse(data)
            Print(data, true)
            if(json.op == 0) {
                switch (json.t) {
                    case "READY":
                        s = json.s;
                        client.user = new DiscordUser(json.d.username, json.d.discriminator, new Snowflake(json.d.id))
                        this.hbm.update(hi, s)
                        this.hbm.start()
                        this.em.new(BotEvent.READY, json.d, client)
                        break;
                
                    default:
                        s = json.s;
                        this.hbm.update(hi, s)
                        break;
                }
            }
            if(json.op == 10) {
                this.ws.send(JSON.stringify({
                    "op": 2,
                    "d": {
                        "token": token,
                        "properties": {
                        "$os": "windows",
                        "$browser": "Fivecord",
                        "$device": "FiveCord"
                        }
                    }
                }))
                hi = json.d.heartbeat_interval
            }
        })
    }

    kill() {
        this.hbm.stop()
        this.ws.terminate();
    }

    updatePresence(game: string, status: string, type: number, afk: boolean = false) {
        this.ws.send(JSON.stringify({
            "op": 3,
            "d": {
                "since": null,
                "game": {
                    "name": game,
                    "type": type,
                    "created_at": Math.round((new Date()).getTime() / 1000)
                },
                "status": status,
                "afk": afk
            }
        }))
        Print("Status Updated!", true)
    }
}