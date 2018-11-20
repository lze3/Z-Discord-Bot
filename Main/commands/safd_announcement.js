const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let announcement = args.join(" ")
    if(!(message.member.roles.has('481541340337930269') || message.member.roles.has('405456643497918464') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.author.send("**You need the `SAFD - Head Executives` role to be able to use the **`" + config.prefix + module.exports.help.name + "` **command.**")
    }
    else
    {
        if(!(message.channel.name === 'jcrp-safd_announcements' || message.guild.name === 'JusticeCommunityRP - Development'))
        {
            message.author.send("You need to use this command in channel `jcrp-safd_announcements`")
            message.author.send("Here's the message incase you forgot to save it: \n`" + announcement + "`")
        }
        else
        {
            if (!args[0]) // checking if args[0] is _only_ given
            {
                message.author.send("Invalid amount of arguments used in command `" + config.prefix + module.exports.help.name + "`.")
            }
            else
            {
                let embed = new Discord.RichEmbed()
                .setAuthor("San Andreas Fire Department Announcement from " + message.author.username, message.author.avatarURL)
                .setDescription("\n" + announcement)
                .setFooter("San Andreas Fire Department - Administration", 'https://i.imgur.com/yekwbNs.png')
                .setTimestamp() // nothing needs to be placed here apparently.
                .setColor("#f6a8ff")

                message.channel.send(embed)
            }
        }
            
    }
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "safd-announce"
}