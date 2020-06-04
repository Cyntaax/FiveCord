import { Snowflake } from "./snowflake";
export declare class DiscordUser {
    username: String;
    tag: String;
    id: Snowflake;
    constructor(username: String, tag: String, id: Snowflake);
}
