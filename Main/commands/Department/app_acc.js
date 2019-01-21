const Discord = require('discord.js')

let config = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let dept = args[1]

    if (!(message.member.roles.has('354093626592329739') || message.member.roles.has('481541340337930269'))) return message.reply("you are not allowed to use that command.")
    if (!applicant) return message.reply("I could not find that user.")
    if (!applicant.roles.has('354074696515584000')) return message.reply("that user does not have the 'Train Me' role.")
    if (!dept) return message.reply("you need to state a department.")
    
    if (dept.toUpperCase() === "SAHP")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + "'s application for the San Andreas Highway Patrol has been accepted!")
        .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('354074453270986752')
        applicant.addRole('354074696322514950')
    } else if (dept.toUpperCase() === "SAHP")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + "'s application for the Los Santos Sheriff's Department has been accepted!")
        .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('354073428795588618')
        applicant.addRole('354074696322514950')
    } else if (dept.toUpperCase() === "LSPD")
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + "'s application for the Los Santos Police Department has been accepted!")
        .setFooter("LSPD Department FTO", "https://i.imgur.com/TRW0Nu0.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        message.channel.send(embed)

        applicant.addRole('505871307041406997')
        applicant.addRole('354074696322514950')
    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'appacc'
}