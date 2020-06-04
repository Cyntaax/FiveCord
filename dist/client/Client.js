"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.PresenceType = exports.StatusType = exports.BotEvent = void 0;
var ws_1 = require("../managers/ws");
var snowflake_1 = require("../classes/snowflake");
var event_1 = require("../managers/event");
var http_1 = require("../managers/http");
var DiscordUser_1 = require("../classes/DiscordUser");
var BotEvent;
(function (BotEvent) {
    BotEvent[BotEvent["READY"] = 0] = "READY";
    BotEvent[BotEvent["MESSAGE_CREATE"] = 1] = "MESSAGE_CREATE";
})(BotEvent = exports.BotEvent || (exports.BotEvent = {}));
var StatusType;
(function (StatusType) {
    StatusType[StatusType["ONLINE"] = 0] = "ONLINE";
    StatusType[StatusType["DND"] = 1] = "DND";
    StatusType[StatusType["IDLE"] = 2] = "IDLE";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
var PresenceType;
(function (PresenceType) {
    PresenceType[PresenceType["PLAYING"] = 0] = "PLAYING";
    PresenceType[PresenceType["LISTENING"] = 1] = "LISTENING";
})(PresenceType = exports.PresenceType || (exports.PresenceType = {}));
var Client = /** @class */ (function () {
    function Client(token) {
        var _this = this;
        this.hm = new http_1.HttpManager();
        this._em = new event_1.EventManager();
        this._wsm = new ws_1.WebsocketManager(this._em);
        this.Guild = /** @class */ (function () {
            function class_1(id) {
                this.id = id;
                // this.data = 
            }
            return class_1;
        }());
        this._token = token;
        this.hm.token = this._token.token;
        this.hm.req("GET", '/users/@me').then(function (v) {
            var bot_data = v;
            _this.user = new DiscordUser_1.DiscordUser(bot_data.username, bot_data.discriminator, new snowflake_1.Snowflake(bot_data.id));
        });
        this.onReady = this._em.onReady.bind(this._em);
        this.onMessage = this._em.onMessage.bind(this._em);
    }
    Client.prototype.login = function () {
        this._wsm.start(this._token.token, this);
    };
    Client.prototype.setStatus = function (game, status_type, presence_type) {
        var game_sting;
        var is_idle;
        var presence_num;
        switch (status_type) {
            case StatusType.ONLINE:
                game_sting = "online";
                is_idle = false;
                break;
            case StatusType.DND:
                game_sting = "dnd";
                is_idle = false;
                break;
            case StatusType.IDLE:
                game_sting = "idle";
                is_idle = true;
                break;
            default:
                game_sting = "online";
                is_idle = false;
                break;
        }
        switch (presence_type) {
            case PresenceType.PLAYING:
                presence_num = 0;
                break;
            case PresenceType.LISTENING:
                presence_num = 2;
                break;
            default:
                presence_num = 0;
                break;
        }
        this._wsm.updatePresence(game, game_sting, presence_num, is_idle);
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map