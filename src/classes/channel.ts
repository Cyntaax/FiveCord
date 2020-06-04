import { Snowflake } from "./snowflake";

export class Channel {

    id: Snowflake

    constructor(snowflake: Snowflake) {
        this.id = snowflake;
    }
}