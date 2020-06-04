import { Snowflake } from "./snowflake"

export class Message {

    id: Snowflake
    content: string
    embeds: Array<any> //TODO make array class
    attachments: Array<any> //TODO make attachment class


    constructor(id: Snowflake, content: string, embeds: Array<any>, attachments: Array<any>) {
        this.id = id;
        this.content = content;
        this.embeds = embeds;
        this.attachments = attachments;
    }
}