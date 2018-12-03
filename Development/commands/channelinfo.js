const Discord = require('discord.js')
const moment = require('moment')
const format = require('moment-duration-format')

module.exports.run = async(bot, message, args) => {
    // let channel = message.mentions.channels.first() || message.guild.channels.find(args.join(" "))
    if (!args[0]) 
        channel = message.channel
    else
        channel = message.mentions.channels.first() || message.guild.channels.find('name', args.join(" ")) || message.guild.channels.get(args[0])
    let topic = channel.topic ? channel.topic : "None"
    let type = channel.type
    let nsfw = channel.nsfw ? channel.nsfw: "N/A"
    let id = channel.id
    let name = channel.name
    let created = moment.utc(channel.createdAt).format("MM/DD/YYYY hh:mm:ss");

    let chanInfo = new Discord.RichEmbed()
    .setDescription(`Info about **${name}** (ID: ${id})`)
    .addField("❯ Info", `• Type: ${type}\n• Topic: ${topic}\n• NSFW: ${nsfw}\n• Creation Date: ${created}`)
    .setColor('#3498DB')
    .setThumbnail('https://i.imgur.com/ODI3OLT.png')

    message.channel.send(chanInfo).then(msg => msg.delete(500000))
}

module.exports.help = {
    name: 'channel'
}