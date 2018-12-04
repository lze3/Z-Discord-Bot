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
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    if(message.member.roles.find('name', 'Director' || 'The Directorate') || message.guild.name === dev.name)
    {
        if(applicant)
        {
            if(args[1] === 'sahp')
            {
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(applicant + "'s application for the San Andreas Highway Patrol has been accepted!")
                .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
                .setTimestamp()
                .setColor("#c2f1ff")

                message.channel.send(embed)

                if(message.guild.id === main.id)
                {
                    applicant.addRole('354074453270986752')
                    applicant.addRole('354074696322514950')
                }
            }
            else if (args[1] === 'lssd')
            {
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(applicant + "'s application for the Los Santos Sheriff's Department has been accepted!")
                .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
                .setTimestamp()
                .setColor("#c2f1ff")

                message.channel.send(embed)

                if(message.guild.id === main.id)
                {
                    applicant.addRole('354073428795588618') // LSSD
                    applicant.addRole('354074696322514950')
                }
            }
            else if (args[1] === 'lspd')
            {
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(applicant + "'s application for the Los Santos Police Department has been accepted!")
                .setFooter("LSPD Department FTO", "https://i.imgur.com/TRW0Nu0.png")
                .setTimestamp()
                .setColor("#c2f1ff")

                message.channel.send(embed)

                if(message.guild.id === main.id)
                {
                    applicant.addRole('505871307041406997') // LSSD
                    applicant.addRole('354074696322514950')
                }
            }
            else
            {
                message.channel.send(message.author + ", improper usage. `" + prefix + module.exports.help.name + " user dept`.")
            }
        }
        else
        {
            message.channel.send(message.author + ", I could not find that user.")
        }
    }
    else
    {
        message.channel.send(message.author + ", you do not have permission to use that command.")
    }

    message.delete().catch(O_o => {}); // deletes the message
}

module.exports.help = {
    name: 'appacc'
}