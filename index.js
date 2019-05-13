global.botconfig = require("./botconfig.json");
global.Discord = require("discord.js");
global.fs = require("fs");
global.Client = new Discord.Client({disableEveryone: true});
global.prefix = botconfig.prefix;
global.request = require('request');
global.colors = require('colors');

Client.commands = new Discord.Collection(); 
Client.ConfigCommands = new Discord.Collection();

global.suggestion_channels = botconfig.suggestion_channels || []

fs.readdir("./commands/Administration", (err, files) => {
    let moduleName = "Administration"; // Module name

    if (err) throw new Error("ERROR: [ " + err.toString() + " ]."); // 
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    
    if (files.length <= 0) {
        console.log("ERROR: No administrative commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Administration/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

fs.readdir("./commands/Automated", (err, files) => {
    let moduleName = "Automated"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No automated commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Automated/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.\n`)
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

fs.readdir("./commands/Development", (err, files) => {
    let moduleName = "Development"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No development commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Development/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

fs.readdir("./commands/Miscellaneous", (err, files) => {
    let moduleName = "Miscellaneous"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No miscellaneous commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Miscellaneous/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

fs.readdir("./commands/Moderation", (err, files) => {
    let moduleName = "Moderation"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No moderation commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

fs.readdir("./commands/Server", (err, files) => {
    let moduleName = "Server"
    if (err) { console.log("ERROR: [ " + err.toString() + " ]."); return }
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No server commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Server/${f}`);
        if (props.help.active || props.help.active === null) {
            Client.commands.set(props.help.name, props)
        }

        if (props.help.active === null || props.help.active === undefined) {
            console.log(`[${f}] This command does not have an 'active' boolean in the help section - WARN.`)
            console.log("")
        }
    })
    console.log(`[${moduleName}] module loaded.`)
});

require('./messageHandler.js')
fs.readFile("./messageHandler.js", (err, data) => {
    if (err) {
        if(err.toString().includes("no such file")) { 
            console.log("The message handler module was not found, this may be a problem."); 
            return 
        } else {
            throw new err()
        }
    }
})

// Displays the message in console
Client.on("ready", async () => {
    
    console.log(`${Client.user.username} is now online.`.rainbow);
    console.log(`${Client.user.username} is now active on ${Client.guilds.size} guilds.`.rainbow)
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


/*
const commonPrefixes = [
    ".",
    "!",
    "?",
    "-"
]

Client.on("messageDelete", message => {
    if (message.author.bot) return
    
    /*
    commonPrefixes.forEach(function(element, i) {
        if (message.content.startsWith(element)) 
            return;

        console.log(element)
        
        if (shouldSend) {
            message.channel.send(`${message.author.username}#${message.member.user.discriminator} deleted their message (sent at ${message.createdAt.toDateString("en-US")}). Shame on them! \nIt said: ${message.content}`)
        }

        shouldSend = false

    })*//*

    let shouldSend = true
    let readyToRun = false
    for (let i=0; i < commonPrefixes.length; i++) {
        if (message.content.startsWith(commonPrefixes[i])) {
            shouldSend = false
            break
        }

        if (i === commonPrefixes.length) {
            readyToRun = true
            break
        }

        shouldSend = true
        readyToRun = false

    }

    if (readyToRun && shouldSend) {
        message.channel.send(`${message.author.username}#${message.member.user.discriminator} deleted their message (sent at ${message.createdAt.toDateString("en-US")}). Shame on them! \nIt said: ${message.content}`)
    }

})
*/

Client.on("guildMemberAdd", member => {
    if (botconfig.welcome === undefined) return Client.guilds.get("541026385649729536").channels.get("569875773490593792").send("There is no 'welcome' array in the bot config, I don't know what/where to send this welcome message or even if I should send it. Please help <@!264662751404621825>")
    if (botconfig.welcome.channelId === undefined || botconfig.welcome.message === undefined) return
    const welcoming = member.guild.channels.get(botconfig.welcome.channelId)
    if (botconfig.welcome.showMessage || botconfig.welcome.showMessage === undefined) {
        try {
            welcoming.send(botconfig.welcome.message.replace("{member}", member))
        } catch(err) {
            welcoming.send(err.toString())
        }
    }
})

Client.on("guildMemberAdd", member => {
    if (botconfig.idiotKids === undefined) return;
    for (let i=0; i < botconfig.idiotKids.length; i++) {
        if (member.id === botconfig.idiotKids[i]) {
            setTimeout(() => {
                member.removeRole("545006442747527189")
                member.addRole("577226333218930702")
            }, 500)
        } 
    }
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