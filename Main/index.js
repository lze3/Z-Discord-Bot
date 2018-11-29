const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

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
    "safdhighc" : "405456643497918464",

    "director" : "481541340337930269",
    "intadmin" : "501076418399043604",
    "leadadmin" : "481358002771722272",
    "senioradmin" : "354091746533179392",
    "admin" : "354091780989255691",
    "junioradmin" : "377330373081956352",
    "staff" : "455237281402585089"
}

bot.commands = new Discord.Collection(); 

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0)
    {
        console.log("Could not file coomads.");
        return;
    }

    jsfile.forEach((f, i) =>
    {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Displays the message in console
bot.on("ready", async () => {
    
    bot.user.setActivity(".info | jcrpweb.com", {type: "WATCHING"}); //
    // console.log('\x1b[92m', `${bot.user.username} is now online.\n ${bot.user.username} is now active on ${bot.guilds.size} guilds.`);
    console.log(`Bot online and currently serving in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)

    bot.user.setStatus('Online') // Online, idle, invisible & dnd
});
// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix || "<@!498235770008502287> ";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(cmd === `hello`){
        return message.react("👍");
    }

    if (cmd === 'setbotstatus') 
    {
        if (args[0] === 'test')
        {
            message.channel.send('test')
        }
        else
        {
            message.channel.send(message.author + ' error.')
        }
    }

    if(cmd === `<@!417197419546017792>`) {
        message.channel.send(`What? ${message.author}`)
    }

    if(cmd === `${prefix}banned`) {
        message.channel.send('If you, or somebody you know was banned, submit an appeal on <https://jcrpweb.com>. Support for bans will not be given.')
    }

    if(cmd === `${prefix}serverinvite`) {
        message.channel.send(`${bot.generateInvite}`)
    }

    if(cmd === `${prefix}civdiscord`) {
        let firstmention = message.mentions.users.first()
        message.delete().catch(O_o => {})
        if (firstmention) {
            message.channel.send(firstmention + ', here is a permanent invite to the civilian operations Discord: https://discord.gg/nWaukXd')
        }else
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