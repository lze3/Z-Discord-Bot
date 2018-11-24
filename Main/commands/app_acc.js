let Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let applicant = message.mentions.users.first()
    if(!(message.member.roles.has('481541340337930269') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.channel.send(message.author + ", you do not have permission to use that command.")
    }
    else
    if(!applicant)
    {
        message.channel.send(message.author + ", could not find user.")
    }
    else
    {
        if (args[1] === 'sahp')
        {
            let embed = new Discord.RichEmbed()
            .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
            .setDescription(applicant + "'s application for the San Andreas Highway Patrol has been accepted!")
            .setFooter("Department FTO", 'https://i.imgur.com/mVLhtCc.png')
            .setTimestamp()
            .setColor("#c2f1ff")

            applicant.addRole('354074453270986752') // Train Me (SAHP)
            applicant.addRole('354074696322514950') // Interview Me (Application Accepted)
        }
        else
        if (args[1] === 'lssd')
        {
            message.channel.send(applicant + "'s application for the Los Santos Sheriff's Department has been accepted!")
            applicant.addRole('354073428795588618')
            applicant.addRole('354074696322514950')

        }
        else
        if (args[1] === 'lspd')
        {
            message.channel.send(applicant + "'s application for the Los Santos Police Department has been accepted!")
            applicant.addRole('505871307041406997')
            applicant.addRole('354074696322514950')
        }
        else
        {
            message.channel.send(message.author + ", `;" + module.exports.help.name + " user dept`")
        }
    }
}

module.exports.help = {
    name: 'appacc'
}