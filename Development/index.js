const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

// const errorchannel = member.guild.channels.find('name', 'jcrp-logs')
bot.commands = new Discord.Collection(); 

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Could not file coomads.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

// Displays the message in console
bot.on("ready", async () => {
    
    // bot.user.setActivity("jcrpweb.com", {type: "PLAYING"});
    // console.log('\x1b[92m', `${bot.user.username} is now online.\n ${bot.user.username} is now active on ${bot.guilds.size} guilds.`);
    console.log(`Bot online and currently serving in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`)

    bot.user.setStatus('Online') // Online, idle, invisible & dnd
});
// Bot Start
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    if(cmd === `hello`){
        return message.react("👍");
    }

    if(cmd === `<@!485504145877499904>`) {
        message.channel.send(`What? ${message.author}`)
    }

    if(cmd === `${prefix}setbotuserstatus`) {
        message.delete().catch(O_o => {})
        if (args[0] === 'dnd') {
            bot.user.setStatus('Dnd')
            message.channel.send(`${message.author}, done!`)
        } else

        if (args[0] === 'idle') {
            bot.user.setStatus('Idle')
            message.channel.send(`${message.author}, done!`)
        } else
        
        if (args[0] === 'online') {
            bot.user.setStatus('Online')
            message.channel.send(`${message.author}, done!`)
        } else
        
        if (args[0] === 'offline') {
            bot.user.setStatus('Invisible')
            message.channel.send(`${message.author}, done!`)
        }
        else
            message.channel.send(`${message.author}, incorrect usage.`)
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
            message.channel.send(`${firstmention}, here is a permanent invite to the civilian operations Discord: https://discord.gg/nWaukXd`)
        }else
        message.channel.send('Here is a permanent invite to the civilian operations Discord: https://discord.gg/nWaukXd')
        
    }


// After verification
    if(messageArray === `?reg`){
        let postVeri = message.guild.channels.find(`name`, "jcrp-off_topic");
        return postVeri.channel.send("Welcome.");
    }
});

bot.login(botconfig.token);