const Discord = require('discord.js')
const moment = require('moment')
const format = require('moment-duration-format')

module.exports.run = async(bot, message, args) => {
    // let channel = message.mentions.channels.first() || message.guild.channels.find(args.join(" "))
    if (!args[0]) 
        channel = message.channel
    else
        channel = message.mentions.channels.first() || message.guild.channels.find('name', args.join(" ")) || message.guild.channels.get(args[0]) || message.guild.channels.find("name", `▌${args.join(" ")}`)

    if(!channel || channel === undefined || channel === null) return message.reply("I couldn't find that channel.")
    let topic = channel.topic ? channel.topic : "None"
    let type = channel.type
    let nsfw = channel.nsfw
    let id = channel.id
    let name = channel.name
    let size = channel.members.size
    let created = moment.utc(channel.createdAt).format("MM/DD/YYYY hh:mm:ss");

    if (type === 'voice')
        nsfw = "N/A"
    
    if (type === 'text')
        size = "N/A"
    

    let chanInfo = new Discord.RichEmbed()
    .setDescription(`Info about **${name}** (ID: ${id})`)
    .addField("❯ Info", `• Type: ${type}\n• Topic: ${topic}\n• NSFW: ${nsfw}\n• Creation Date: ${created}\n• Size: ${size}`)
    .setColor('#3498DB')
    .setThumbnail('https://w.wew.wtf/impcab.png')

    message.channel.send(chanInfo)
}

module.exports.help = {
    name: 'channel'
}