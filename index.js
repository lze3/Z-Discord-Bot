const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

global.prefix = botconfig.prefix

bot.commands = new Discord.Collection(); 
bot.ConfigCommands = new Discord.Collection();

fs.readdir("./commands/Automated", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No automated commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Automated/${f}`);
        console.log(`Command [ ${f} ] loaded! [Automated]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Development", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No development commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Development/${f}`);
        console.log(`Command [ ${f} ] loaded! [Development]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Miscellaneous", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No miscellaneous commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Miscellaneous/${f}`);
        console.log(`Command [ ${f} ] loaded! [Miscellaneous]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Moderation", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No moderation commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Moderation/${f}`);
        console.log(`Command [ ${f} ] loaded! [Moderation]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Server", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (files.length <= 0) {
        console.log("ERROR: No server commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Server/${f}`);
        console.log(`Command [ ${f} ] loaded! [Server]`)
        bot.commands.set(props.help.name, props)
    })
});

// Displays the message in console
bot.on("ready", async () => {
    
    console.log('\x1b[92m', `${bot.user.username} is now online.\n ${bot.user.username} is now active on ${bot.guilds.size} guilds.`);
    console.log(` Bot online and currently serving in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)

    bot.user.setStatus('Online') // Online, idle, invisible & dnd
});

// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

});

bot.on("error", console.error);

var rebootmsg1 = new Discord.RichEmbed()
    .setDescription("Restarting bot...")
    .setFooter("This process may take up to 1 minute.")
    .setColor("#F4613F")

var rebootmsg2 = new Discord.RichEmbed()
    .setDescription("Bot has restarted!")
    .setFooter(bot.commands.size + " errors encountered")
    .setColor("#417af4")

global.reboot = function resetBot(channel) {
    channel.send(rebootmsg1)
    .then(() => bot.destroy())
    .then(() => bot.login(botconfig.token))
    .then(() => channel.send(rebootmsg2)
    .then(() => console.log(`Ping: ${bot.ping}\n  Process restarted!`)));
}

bot.login(botconfig.token);