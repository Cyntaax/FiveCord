import { Snowflake } from "./snowflake";
export declare class Message {
    id: Snowflake;
    content: string;
    embeds: Array<any>;
    attachments: Array<any>;
    constructor(id: Snowflake, content: string, embeds: Array<any>, attachments: Array<any>);
}
