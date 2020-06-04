import { Client, StatusType, DiscordToken, PresenceType } from './src'

const client = new Client(new DiscordToken("TOKEN"))

client.onReady(async (e) => {
    console.log(`Online as ${e.user.username}#${e.user.tag}`)
    client.setStatus("Fivecord!", StatusType.DND, PresenceType.PLAYING)
});

client.onMessage(async (e) => {
    console.log(`New Message: ${e.message.content} | With the id ${e.message.id.id}`)
    e.reply(`Hey, I'm Fivecord!`)
});

client.login()