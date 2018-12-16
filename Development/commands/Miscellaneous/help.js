const Discord = require('discord.js')
const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let cName = args[0]
    if (!cName) {
        let embed = new Discord.RichEmbed()
        .setAuthor("Commands", 'https://i.imgur.com/Y4XRvi4.png')
        .setDescription(`${commands.map(command => "**" + prefix + command.help.name + "**\n").join(" ")}`)

        message.author.send(embed)
    }
}

module.exports.help = { 
    name: "help"
}