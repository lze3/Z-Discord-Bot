const Discord = require("discord.js")
const images = ('../images/special.png')

const moment = require('moment')

module.exports.run = async (bot, message, args) => {
    if (!args[0]) 
        member = message.guild.member(message.author),
        user   = message.author
    else
        member = message.guild.member(message.mentions.users.first()) || message.guild.member(message.guild.members.get(args[0])),
        user   = message.mentions.users.first() || bot.users.get(args[0])

    if(!user || user === undefined || user === null) return message.reply("I couldn't find that user.")
    
    // Member properties
    let joinedAt = moment.utc(member.joinedAt).format("MM/DD/YYYY hh:mm:ss")
    let nickname = `• Nickname: ${member.nickname}`

    if(nickname === "" || nickname === null || nickname === undefined || nickname === " ")
        nickname = "• No nickname"

    // User properties
    let id        = user.id
    let username  = user.username
    let createdAt = moment.utc(user.createdAt).format("MM/DD/YYYY hh:mm:ss")
    let status    = user.presence.status.toUpperCase()

    if (member.presence.game === "" || member.presence.game === null)
        activity = "None"
    else
        activity = member.presence.game.name

    let userInfo = new Discord.RichEmbed()
    .setDescription(`Info about **${username}** (ID: ${user.id})`)
    .addField("❯ Member Details", `${nickname}\n• Joined at: ${joinedAt}`)
    .addField("❯ User Details", `• ID: ${id}\n• Username: ${username}\n• Created at: ${createdAt}\n• Status: ${status}\n• Activity: ${activity}`)
    .setColor('#3498DB')
    .setThumbnail(user.avatarURL)

    message.channel.send(userInfo)
}

module.exports.help = {
    name: "user"
}