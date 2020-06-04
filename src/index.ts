import { Client, StatusType, PresenceType } from "./client/Client";
import { DiscordToken } from "./classes/DiscordToken";
import { Snowflake } from "./classes/snowflake";
import { Print } from "./utils/print";
import { delay } from "./utils/delay";

// TODO Sort out imports/exports to make easy importing of required items when used in actual projects and remove the test bot into an examples folder!


const client = new Client(new DiscordToken("NzE3NjY3MDc5NDM5Nzc3ODEy.Xtdq_g.aWJvFzcuaz-KPWDg6vFAVct2ib0"))

client.onReady(async (e) => {
    Print(`Online as ${e.user.username}#${e.user.tag}`)
    client.setStatus("switches!", StatusType.IDLE, PresenceType.LISTENING)
    await delay(5000)
    client.setStatus("Fivecord!", StatusType.DND, PresenceType.PLAYING)
})

client.login()