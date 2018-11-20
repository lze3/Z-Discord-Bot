let Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let message58 = args.join(' ')
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())
    message.channel.send(message58).then(msg => msg.delete())

    message.delete().catch(O_o => {})

}

module.exports.help = {
    name: 'spamxdlollmaokappalul'
}