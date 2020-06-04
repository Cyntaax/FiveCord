import { Snowflake } from "./snowflake";
import { Color } from "./color";

export class Role {
    id: Snowflake;
    name: String;
    color: Color;
    hoist: Boolean;
    position: Number;
    permissions: Number;
    managed: Boolean;
    mentionable: Boolean;
    constructor(id: Snowflake, name: String, color: Color, hoist: Boolean,  position: Number, permissions: Number, managed: Boolean, mentionable: Boolean) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.hoist = hoist;
        this.position = position;
        this.permissions = permissions;
        this.managed = managed;
        this.mentionable = mentionable;
    }
}