"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = exports.Color = exports.DiscordUser = exports.Guild = exports.Message = exports.Role = exports.OnReadyEventData = exports.OnMessageEventData = exports.Snowflake = exports.DiscordToken = exports.PresenceType = exports.StatusType = exports.Client = void 0;
var Client_1 = require("./client/Client"); // *
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
Object.defineProperty(exports, "StatusType", { enumerable: true, get: function () { return Client_1.StatusType; } });
Object.defineProperty(exports, "PresenceType", { enumerable: true, get: function () { return Client_1.PresenceType; } });
var DiscordToken_1 = require("./classes/DiscordToken"); // *
Object.defineProperty(exports, "DiscordToken", { enumerable: true, get: function () { return DiscordToken_1.DiscordToken; } });
var snowflake_1 = require("./classes/snowflake"); // *
Object.defineProperty(exports, "Snowflake", { enumerable: true, get: function () { return snowflake_1.Snowflake; } });
var message_1 = require("./events/message");
Object.defineProperty(exports, "OnMessageEventData", { enumerable: true, get: function () { return message_1.OnMessageEventData; } });
var ready_1 = require("./events/ready");
Object.defineProperty(exports, "OnReadyEventData", { enumerable: true, get: function () { return ready_1.OnReadyEventData; } });
var role_1 = require("./classes/role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return role_1.Role; } });
var message_2 = require("./classes/message");
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return message_2.Message; } });
var guild_1 = require("./classes/guild");
Object.defineProperty(exports, "Guild", { enumerable: true, get: function () { return guild_1.Guild; } });
var DiscordUser_1 = require("./classes/DiscordUser");
Object.defineProperty(exports, "DiscordUser", { enumerable: true, get: function () { return DiscordUser_1.DiscordUser; } });
var color_1 = require("./classes/color");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return color_1.Color; } });
var channel_1 = require("./classes/channel");
Object.defineProperty(exports, "Channel", { enumerable: true, get: function () { return channel_1.Channel; } });
//# sourceMappingURL=index.js.map