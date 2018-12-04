const Discord = require('discord.js')
const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let user_s = message.author;
    let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    if (message.member.roles.has('481541340337930269') || message.member.roles.has('501076418399043604') || message.guild.name === 'JusticeCommunityRP - Development')
    {
        if (user_t)
        {
            let embed = new Discord.RichEmbed()
            .setAuthor("General Announcement", message.author.avatarURL)
            .setDescription(":tada::tada::tada:\n\nCongratulations " + user_t + " you have been assigned Junior Administrator by Director " + user_s.username + "\n\nWe appreciate all the hard work you have been putting in on the server and we believe that you deserve this staff position. \n\n:tada::tada::tada:")
            .setFooter("Server Directorate - " + user_s.username, 'https://i.imgur.com/AptoaoJ.png')
            .setTimestamp()
            .setColor("#c2f1ff")

            if (message.guild.name !== 'JusticeCommunityRP - Development')
            {
                user_t.addRole('455237281402585089')
                user_t.addRole('377330373081956352')
            }

            message.channel.send(embed)
        }
        else
        {
            message.channel.send(user_s + ", incorrect usage. `" + prefix + module.exports.help.name + " user`. I could not find that user.")
        }
    }  
    else
    {
        message.channel.send(user_s + ", you do not have permission to use that command.")
    }

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'jadmin'
}