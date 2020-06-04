import { Snowflake } from "./snowflake";

export class DiscordUser {
    username: String; 
    tag: String; 
    id: Snowflake;
    constructor(username: String, tag: String, id: Snowflake) {
        this.username = username;
        this.tag = tag;
        this.id = id;
    }
}