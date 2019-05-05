const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    return message.channel.send(`Pong! \`${new Date().getTime() - message.createdTimestamp}ms\``);
}

module.exports.help = {
    name: "ping",
    active: true
}