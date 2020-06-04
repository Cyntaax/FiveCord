import { Print } from "../utils/print";
import { delay } from "../utils/delay";

export class HeartbeatManager {
    beating: boolean = true;
    reciving: boolean = true;
    hi: number;
    s: number;
    ws: WebSocket;
    constructor(hi: number, s: number, ws: WebSocket) {
        this.hi = hi;
        this.s = s;
        this.ws = ws;
    }

    update(hi: number, s: number) {
        this.s = s;
        this.hi = hi;
    }

    async start() {
        while(this.beating) {
            Print("Heartbeat!", true)
            this.ws.send(JSON.stringify({
                "op" : 1,
                "d" : this.s
            }));
            await delay(this.hi)
        }
    }

    stop() {
        this.beating = false;
    }
}