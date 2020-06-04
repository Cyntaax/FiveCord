import { DiscordUser } from "../classes/DiscordUser"

export class OnReadyEventData {

    user: DiscordUser;
    session: string;
    guilds: Array<any>;

    constructor(user: DiscordUser, session: string, guilds: Array<any>) {
        this.user = user;
        this.session = session;
        this.guilds = guilds;
    }
}

// export class OnReadyEventData {
//     constructor() {}
// }