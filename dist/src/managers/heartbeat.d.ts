export declare class HeartbeatManager {
    beating: boolean;
    reciving: boolean;
    hi: number;
    s: number;
    ws: WebSocket;
    constructor(hi: number, s: number, ws: WebSocket);
    update(hi: number, s: number): void;
    start(): Promise<void>;
    stop(): void;
}
