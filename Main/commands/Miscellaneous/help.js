const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let cName = args[0]
    if (!cName) {
        let embed = new Discord.RichEmbed()
        .setAuthor("Commands", bot.here.avatarURL)

        message.author.send(embed)
    }
}

module.exports.help = { 
    name: "help"
}