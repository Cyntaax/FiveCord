import { Snowflake } from "./snowflake";
import { Color } from "./color";
export declare class Role {
    id: Snowflake;
    name: String;
    color: Color;
    hoist: Boolean;
    position: Number;
    permissions: Number;
    managed: Boolean;
    mentionable: Boolean;
    constructor(id: Snowflake, name: String, color: Color, hoist: Boolean, position: Number, permissions: Number, managed: Boolean, mentionable: Boolean);
}
