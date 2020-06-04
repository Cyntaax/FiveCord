"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnMessageEventData = void 0;
var OnMessageEventData = /** @class */ (function () {
    function OnMessageEventData(message, sender, channel, guild, client) {
        this.message = message;
        this.sender = sender;
        this.channel = channel;
        this.guild = guild;
        this._client = client;
    }
    OnMessageEventData.prototype.reply = function (content) {
        var message_data = {
            "content": content,
            "tts": false
        };
        this._client.hm.req("POST", "/channels/" + this.channel.id.id + "/messages", message_data).then(function (v) {
            return v;
        });
    };
    return OnMessageEventData;
}());
exports.OnMessageEventData = OnMessageEventData;
//# sourceMappingURL=message.js.map