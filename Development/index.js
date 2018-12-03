const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.ConfigCommands = new Discord.Collection();

global.info =
{
    "authorid" : "264662751404621825",
    "authorname" : "Jack H."
}

global.channels =
{
    "announcements" : "354125626724057089",
    "update" : "378425233008361472",
    "logs" : "368193331638829056",
    "main" : "372942940550463488",
    "offtopic" : "372943832876056576",
    "bots" : "452156710983827456",
    "reports" : "514898951346847754",
    "support" : "471428670607589386",
    "devc" : "500035199183093771", // dev chat
    "devi" : "500035221572550676", // dev ideas
    "vip" : "372949800720531456",
    "leinfo" : "354137604754505749",
    "lecommand" : "420777683325288448",
    "ftochat" : "376183384239767572",

    "lspdan" : "500807329558560784",
    "lspd" : "500807575382654976",
    "lspdfto" : "505512109287931914",
    "lspdhc" : "505512143957786644",

    "lssdan" : "457265877826666497",
    "lssd" : "372953122919940097",
    "lssdfto" : "372954592406929408",
    "lssdlc" : "471064696208752674",
    "lssdhc" : "405459821345898506",

    "sahpan" : "457266379574345738",
    "sahp" : "372952535700602880",
    "sahpfto" : "372954039396204555",
    "sahphc" : "405459919295479808",

    "safdan" : "356984068446879744",
    "safd" : "372953316193337344",
    "safdfto" : "372954813157343232",
    "safdhc" : "405459561651109888"
}

global.roles = 
{
    "sahpdept" : "367796502824878080",
    "sahpfto" : "354074444265947147",
    "sahpsrank" : "354067549970890767",
    "sahphighc" : "405444705560559618",

    "lspddept" : "500799280974397463",
    "lspdfto" : "505550111099584512",
    "lspdsrank" : "500800444616933406",
    "lspdhighc" : "500799280974397463",

    "lssddept" : "367796714586898433",
    "lssdfto" : "354074456940871681",
    "lssdsrank" : "354074458618855444",
    "lssdhighc" : "367796714586898433",

    "safddept" : "367796857272926218",
    "safdfto" : "354087776259538954",
    "safdsrank" : "354086496996818946",
    "safdhighc" : "405456643497918464"


}

// const errorchannel = member.guild.channels.find('name', 'jcrp-logs')
bot.commands = new Discord.Collection(); 

fs.readdir("./commands/Automated", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No automated commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Automated/${f}`);
        console.log(`Command [ ${f} ] loaded! [Automated]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Department", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
        console.log("ERROR: No department commands loaded.")
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require(`./commands/Department/${f}`);
        console.log(`Command [ ${f} ] loaded! [Department]`)
        bot.commands.set(props.help.name, props)
    })
});

fs.readdir("./commands/Development", (err, files) => {
    if (err) console.log("ERROR: [ " + err + " ].");
    let jsFile = files.filter(f => f.split(".").pop() === "js")
    if (jsFile.length <= 0) {
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
    if (jsFile.length <= 0) {
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
    if (jsFile.length <= 0) {
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
    if (jsFile.length <= 0) {
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
    
    bot.user.setPresence({
        data: {
            game: {
                name: "JusticeCommunityRP | jcrpweb.com"
            },
            status: "dnd"
        }
    })
    console.log(`Bot online and currently serving in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)

});

bot.on("guildCreate", guild => {
	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {
	console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix || "<@!485504145877499904> ";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(cmd === `${prefix}civdiscord`) {
        let firstmention = message.mentions.users.first()
        message.delete().catch(O_o => {})
        if (firstmention) 
        {
            message.channel.send(firstmention + ', here is a permanent invite to the civilian operations Discord: https://discord.gg/nWaukXd')
        }
        else
        message.channel.send('Here is a permanent invite to the civilian operations Discord: https://discord.gg/nWaukXd')        
    }   


// After verification
    if(messageArray === `?reg`){
        let postVeri = message.guild.channels.find(`name`, "jcrp-off_topic");
        return postVeri.channel.send("Welcome.");
    }
});

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
    .then(msg => bot.destroy())
    .then(() => bot.login(botconfig.token))
    .then(() => channel.send(rebootmsg2)
    .then(() => console.log(`  Ping: ${bot.ping}\n  Process restarted!`)));
}

bot.login(botconfig.token);