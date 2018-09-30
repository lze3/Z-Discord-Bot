const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#ffb5b5")
    .setTitle(bot.user.username)
    .addField("Version", "1.0.0")
    .addField("Servers", "This bot is only present in JusticeCommunityRP, the origin of the bot can be found in FAXES's (the author) Discord.")
    .addField("Uptime", "Use Command: uptime")
    .addField("Author", "This bot was initially created by FAXES, and modified by <@264662751404621825>");

    message.channel.send(botembed);
}

module.exports.help = {
    name: "botinfo"
}