global.config = require("./config.json");
global.Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

global.info =
{
    "authorid" : "264662751404621825",
    "authorname" : "Jack H."
}

global.channels =
{

}

global.roles = 
{

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

    let prefix = config.prefix || "<@!498235770008502287> ";
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

bot.on("messageDelete", message => {
    if (message.author.bot) return undefined;

    global.logChannel = message.guild.channels.find("name", "logs")

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
    .setDescription("**Message sent by <@!" + message.author.id + "> in " + message.channel + "\n" + message.content)
    logChannel.send(embed)
})

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
    .then(() => bot.login(config.token))
    .then(() => channel.send(rebootmsg2)
    .then(() => console.log(`  Ping: ${bot.ping}\n  Process restarted!`)));
}

bot.login(config.token);