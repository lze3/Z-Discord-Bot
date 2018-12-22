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
    .setTitle("Uptime")
    .setDescription(`${hours} hrs, ${minutes} mins`)
    .setTimestamp()
    .setColor(1146534)
    
    
    message.channel.send(uptimeEmbed)
}

module.exports.help = {
    name: "uptime"
}