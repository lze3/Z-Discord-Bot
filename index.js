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

bot.on("guildMemberAdd", member => {
    const embed = new Discord.RichEmbed()
    .setTitle("Member Join")
    .setDescription(`${member.user.username}#${member.user.discriminator}`)
    .setFooter(`Member count: ${member.guild.memberCount}`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor(7068245)
    const logs = member.guild.channels.get('552152267399102488')
    const welcoming = member.guild.channels.get('544999746297790474')
    logs.send(embed)
    welcoming.send(`Hello, ${member}, welcome to JHodgson1's personal Discord. Please ensure to read the rules in <#541288672918765579> and abide by them. If you have any issues or concerns feel free to ask in the <#544999903848300559> or <#544999857174347776> depending on your question. 
    
    We hope you enjoy your stay!`)
    member.addRole("545006442747527189")
})

bot.on('guildMemberRemove', member => {
    const embed = new Discord.RichEmbed()
    .setTitle("Member Left")
    .setDescription(`${member.user.username}#${member.user.discriminator}`)
    .setFooter(`Member count: ${member.guild.memberCount}`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor(15226197)
    const logs = member.guild.channels.get('552152267399102488')
    logs.send(embed)
})

bot.on('guildBanAdd', (guild, user) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Member Banned")
    .setDescription(`${user.username}#${user.discriminator}`)
    .setFooter(`Member count: ${guild.memberCount}`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor(16437327)
    const logs = guild.channels.get('552152267399102488')
    logs.send(embed)
})

bot.on('guildBanRemove', (guild, user) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Member Unbanned")
    .setDescription(`${user.username}#${user.discriminator}`)
    .setFooter(`Member count: ${guild.memberCount}`)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setColor(7068245)
    const logs = guild.channels.get('552152267399102488')
    logs.send(embed)
})

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