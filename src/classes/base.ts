import { Snowflake } from "./snowflake";

export class CordBase {
    snowflake: Snowflake;
    constructor(snowfake: Snowflake) {
        this.snowflake = snowfake;
    }
}