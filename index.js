global.botconfig = require("./botconfig.json");
global.Discord = require("discord.js");
global.fs = require("fs");
global.Client = new Discord.Client({disableEveryone: true});
global.prefix = botconfig.prefix
global.request = require('request')
Client.commands = new Discord.Collection(); 
Client.ConfigCommands = new Discord.Collection();

const suggestion_channels = botconfig.suggestion_channels || []

fs.readdir("./commands/Administration", (err, files) => {
    let mname = "Administration"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No administrative commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Administration/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

fs.readdir("./commands/Automated", (err, files) => {
    let mname = "Automated"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No automated commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Automated/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

fs.readdir("./commands/Development", (err, files) => {
    let mname = "Development"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No development commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Development/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

fs.readdir("./commands/Miscellaneous", (err, files) => {
    let mname = "Miscellaneous"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No miscellaneous commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Miscellaneous/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

fs.readdir("./commands/Moderation", (err, files) => {
    let mname = "Moderation"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No moderation commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

fs.readdir("./commands/Server", (err, files) => {
    let mname = "Server"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No server commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Server/${f}`);
        Client.commands.set(props.help.name, props)
    })
    console.log(`[${mname}] module loaded.`)
});

// Displays the message in console
Client.on("ready", async () => {
    
    console.log(`\x1b[92m${Client.user.username} is now online.\n${Client.user.username} is now active on ${Client.guilds.size} guilds.`);
    console.log(`Bot online and currently serving in ${Client.channels.size} channels on ${Client.guilds.size} servers, for a total of ${Client.users.size} users.`)

    Client.user.setPresence({
        status: "online",
        afk: false,
        game: {
            name: "Follow JHodgson1 on Twitch!",
            url: "https://twitch.tv/jhodgson1",
            type: "STREAMING"
        } 
    });
});

Client.on("message", async message => {
    var arrayLength = suggestion_channels.length;
    for (var i = 0; i < arrayLength; i++) {
        if (message.channel.id === suggestion_channels[i])
        {
            await message.react("👍")
            await message.react("👎")
        }
    }
})

// Bot Start
Client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
	// if (!message.member.hasPermission("MANAGE_GUILD")) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = Client.commands.get(cmd.slice(prefix.length));
    if (commandfile) {
        var embed = new Discord.RichEmbed()
        .setColor("#117EA6")
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        .setDescription(`Used \`${cmd.slice(1)}\` in <#${message.channel.id}>\n${cmd} ${args.join(" ")}`)
        .setTimestamp()

        commandfile.run(Client, message, args);
        message.guild.channels.get("554365078401449990").send(embed)
    } 

});

const commonPrefixes = [
    ".",
    "!",
    "?",
    "-"
]

Client.on("messageDelete", message => {
    if (message.author.bot) return
    for (var i = 0; i < commonPrefixes.length; i++) { 
        if (!message.content.startsWith(commonPrefixes[i])) {
            if (botconfig.deleteShame || botconfig.deleteShame === null)
            {
                message.channel.send(`${message.author.username}#${message.member.user.discriminator} deleted their message (sent at ${message.createdAt.toDateString("en-US")}). Shame on them! \nIt said: ${message.content}`)
                break
            }
        }
    }
})

Client.on("guildMemberAdd", member => {
    const welcoming = member.guild.channels.get('544999746297790474')
    welcoming.send(
`Hello, ${member}, welcome to JHodgson1's personal Discord. Please ensure to read the rules in <#541288672918765579> and abide by them. If you have any issues or concerns feel free to ask in <#544999903848300559> or any of the scripting channels depending on your question. 
        
We hope you enjoy your stay!`)
})

Client.on("warn", console.warn);
Client.on("error", console.error);

var rebootmsg1 = new Discord.RichEmbed()
    .setDescription("Restarting bot...")
    .setFooter("This process may take up to 1 minute.")
    .setColor("#F4613F")

var rebootmsg2 = new Discord.RichEmbed()
    .setDescription("Bot has restarted!")
    .setFooter(Client.commands.size + " errors encountered")
    .setColor("#417af4")

global.reboot = function resetBot(channel) {
    channel.send(rebootmsg1)
    .then(() => Client.destroy())
    .then(() => Client.login(botconfig.token))
    .then(() => channel.send(rebootmsg2)
    .then(() => console.log(`Ping: ${Client.ping}\n  Process restarted!`)));
}

Client.login(botconfig.token);