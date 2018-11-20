const Discord = require("discord.js")

module.exports.run = async (bot, message) => {
    message.delete();
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds);

    if (seconds >= 60) {
        seconds = 0
    }

    let uptimeEmbed = new Discord.RichEmbed()
    .setDescription("Uptime")
    .setColor("#117ea6")
    .addField("Hours", hours)
    .addField("Minutes", minutes)
    .addField("Seconds", seconds)
    
    message.channel.send(uptimeEmbed).then(msg => msg.delete(10000));
}

module.exports.help = {
    name: "uptime"
}