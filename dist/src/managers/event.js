"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
var Client_1 = require("../client/Client");
var ready_1 = require("../events/ready");
var DiscordUser_1 = require("../classes/DiscordUser");
var snowflake_1 = require("../classes/snowflake");
var message_1 = require("../events/message");
var message_2 = require("../classes/message");
var channel_1 = require("../classes/channel");
var guild_1 = require("../classes/guild");
var EventManager = /** @class */ (function () {
    function EventManager() {
    }
    EventManager.prototype.new = function (event, data, client) {
        switch (event) {
            case Client_1.BotEvent.READY:
                this.onReadyCallback && this.onReadyCallback(new ready_1.OnReadyEventData(new DiscordUser_1.DiscordUser(data.user.username, data.user.discriminator, new snowflake_1.Snowflake(parseInt(data.user.id))), data.session_id, data.guilds));
                break;
            case Client_1.BotEvent.MESSAGE_CREATE:
                if (data.author.id != client.user.id.id) {
                    var message = new message_2.Message(new snowflake_1.Snowflake(data.id), data.content, data.embeds, data.attachments);
                    var sender = new DiscordUser_1.DiscordUser(data.author.username, data.author.discriminator, new snowflake_1.Snowflake(data.id));
                    var channel = new channel_1.Channel(new snowflake_1.Snowflake(data.channel_id));
                    var guild = new guild_1.Guild(new snowflake_1.Snowflake(data.guild_id));
                    this.onMessageCallback && this.onMessageCallback(new message_1.OnMessageEventData(message, sender, channel, guild, client));
                }
                break;
            default:
                break;
        }
    };
    EventManager.prototype.onReady = function (cb) {
        this.onReadyCallback = cb;
    };
    EventManager.prototype.onMessage = function (cb) {
        this.onMessageCallback = cb;
    };
    return EventManager;
}());
exports.EventManager = EventManager;
//# sourceMappingURL=event.js.map