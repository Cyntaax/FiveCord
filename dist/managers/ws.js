"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketManager = void 0;
var print_1 = require("../utils/print");
var Client_1 = require("../client/Client");
var heartbeat_1 = require("./heartbeat");
var WebSocket = require('ws');
var WebsocketManager = /** @class */ (function () {
    function WebsocketManager(em) {
        this.ws = new WebSocket('wss://gateway.discord.gg/?v=6&encoding=json', {}); // TODO impliment dynamic gateway url getting
        this.hbm = new heartbeat_1.HeartbeatManager(0, 0, this.ws);
        this.em = em;
    }
    WebsocketManager.prototype.start = function (token, client) {
        var _this = this;
        var token_formatted = "Bot " + token;
        var hi = 0;
        var s = 0;
        this.ws.on('message', function (data) {
            var json = JSON.parse(data);
            print_1.Print(data, true);
            if (json.op == 0) {
                switch (json.t) {
                    case "READY":
                        s = json.s;
                        // client.user = new DiscordUser(json.d.username, json.d.discriminator, new Snowflake(json.d.id))
                        _this.hbm.update(hi, s);
                        _this.hbm.start();
                        _this.em.new(Client_1.BotEvent.READY, json.d, client);
                        break;
                    case "MESSAGE_CREATE":
                        _this.em.new(Client_1.BotEvent.MESSAGE_CREATE, json.d, client);
                        break;
                    default:
                        s = json.s;
                        _this.hbm.update(hi, s);
                        break;
                }
            }
            if (json.op == 10) {
                _this.ws.send(JSON.stringify({
                    "op": 2,
                    "d": {
                        "token": token,
                        "properties": {
                            "$os": "windows",
                            "$browser": "Fivecord",
                            "$device": "FiveCord"
                        }
                    }
                }));
                hi = json.d.heartbeat_interval;
            }
        });
    };
    WebsocketManager.prototype.kill = function () {
        this.hbm.stop();
        this.ws.terminate();
    };
    WebsocketManager.prototype.updatePresence = function (game, status, type, afk) {
        if (afk === void 0) { afk = false; }
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
        }));
        print_1.Print("Status Updated!", true);
    };
    return WebsocketManager;
}());
exports.WebsocketManager = WebsocketManager;
//# sourceMappingURL=ws.js.map