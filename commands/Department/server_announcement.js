const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let title = message.content.split("\"")

    message.channel.send(title)
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "announce"
}