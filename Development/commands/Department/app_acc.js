const Discord = require('discord.js')

let config = require('../../botconfig.json')
let prefix = config.prefix

let main = 
{
    ["id"] : '354062777737936896',
    ["name"] : 'JusticeCommunityRP' // might change
}

let dev =
{
    ["id"] : '492021406377443328',
    ["name"] : 'JusticeCommunityRP - Development'
}

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

    if(!message.member.roles.has('481541340337930269')) return message.channel.reply("you are not authorized to use that command.")
    if (!args) return message.reply("you need to provide some arguments.")
    if (!applicant) return message.reply("I could not find that user.")
    if (!args[1]) return message.reply("you need to specify a department.")
    // if (args[1] !== "sahp" || args[1] !== "lssd" || args[1] !== "lspd") return message.reply("that is an invalid department.")
    if (args[1] === "sahp")
    {
        description = applicant + "'s application for the San Andreas Highway Patrol has been accepted! Please contact an FTO to arrange your interview and training."
        footer = "SAHP Department FTO"
        foot_img = "https://i.imgur.com/mVLhtCc.png"
    }
    else if (args[1] === "lssd")
    {
        description = applicant + "'s application for the Los Santos Sheriff's Department has been accepted! Please contact an FTO to arrange your interview and training."
        footer = "LSSD Department FTO"
        foot_img = "https://i.imgur.com/TRW0Nu0.png"
    }
    else if (args[1] === 'lspd')
    {
        description = applicant + "'s application for the Los Santos Police Department has been accepted! Please contact an FTO to arrange your interview and training."
        footer = "LSPD Department FTO"
        foot_img = "https://i.imgur.com/tLIylue.png"
    }

    let embed = new Discord.RichEmbed()
    .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
    .setDescription(description)
    .setFooter(footer, foot_img)
    .setTimestamp()
    .setColor('#c2f1ff')

    message.channel.send(embed)

    message.delete().catch(O_o => {}); // deletes the message
}

module.exports.help = {
    name: 'appacc'
}