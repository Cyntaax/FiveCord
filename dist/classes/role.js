"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var Role = /** @class */ (function () {
    function Role(id, name, color, hoist, position, permissions, managed, mentionable) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.hoist = hoist;
        this.position = position;
        this.permissions = permissions;
        this.managed = managed;
        this.mentionable = mentionable;
    }
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=role.js.map