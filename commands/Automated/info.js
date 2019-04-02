const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(Client, message, args) =>
{
    let totalSeconds = (Client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let mins = Math.floor(totalSeconds / 60);
    let secs = Math.floor(totalSeconds % 60);

    let embed = new Discord.RichEmbed()
    .setAuthor("Bot Information", 'https://i.imgur.com/ODI3OLT.png')
    .setDescription('This bot is primarily made for department related things, such as adding roles, removing roles, making announcements etc. There is also a `' + prefix + "status` command to see the status of our servers.\n\nIn the future we plan on making commands to administrate the server, adding commands to stop or [re]start resource.")
    .addField("Want To Contribute?", "If you wish to contribute to this bot, fill out a developer application in <#499709051853078538> and the <@&484129797195300868> will review it.")
    .addField("Uptime", hours + " hrs, " + mins + " mins, " + secs + " secs")
    .setFooter("Bot Developer - " + info.authorname, 'https://i.imgur.com/sT3ev1X.png')
    .setColor('#9ae7ff')

    message.channel.send(embed)
}

module.exports.help = {
    name: 'info'
}