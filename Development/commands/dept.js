
const Discord = require('discord.js')
const config = require('../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let user_s = message.author;
    let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    if (message.member.roles.has('505550111099584512') || message.member.roles.has('354074456940871681') || message.member.roles.has('354074444265947147') || message.member.roles.has('354087776259538954') || message.member.roles.has('481541340337930269') || message.guild.name === 'JusticeCommunityRP - Development')
    {
        if (args[1] !== "")
        {
            if (args[1] === 'lspd' && (message.member.roles.has('505550111099584512') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
            {
                let LSPD_c = message.guild.channels.find('name', 'jcrp-lspd')
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(user_t + " has passed their LSPD training and has been given LSPD department roles! Give them a warm welcome!")
                .setFooter("LSPD Department FTO", "https://i.imgur.com/TRW0Nu0.png")
                .setTimestamp()
                .setColor("#94d2ff")

                if (message.guild.id === '354062777737936896')
                {
                    user_t.addRole('500799280974397463') // LSPD
                    user_t.addRole('500800444616933406') // LSPD - Officer
                    user_t.addRole('354095488666042380') // Law Enforcement
                    user_t.addRole('354095512225316876') // First Responders

                    LSPD_c.send(embed)
                }
                else
                {
                    message.channel.send(embed)
                }
            }
            else if (args[1] === 'lssd' && (message.member.roles.has('367796714586898433') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
            {
                let LSSD_c = message.guild.channels.find('name', 'jcrp-lssd')
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(user_t + " has passed their LSSD training and has been given LSSD department roles! Give them a warm welcome!")
                .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
                .setTimestamp()
                .setColor("#b8ffab")

                if (message.guild.id === '354062777737936896')
                {
                    user_t.addRole('367796714586898433') // LSSD
                    user_t.addRole('354074458618855444') // LSSD - Prob. Dep.
                    user_t.addRole('354095488666042380') // Law Enforcement
                    user_t.addRole('354095512225316876') // First Responders
                    
                    LSSD_c.send(embed)
                }
                else
                {
                    message.channel.send(embed)
                }
            }

            else if (args[1] === 'sahp' && (message.member.roles.has('354074444265947147') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
            {
                let SAHP_c = message.guild.channels.find('name', 'jcrp-sahp')
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(user_t + " has passed their SAHP training and has been given SAHP department roles! Give them a warm welcome!")
                .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
                .setTimestamp()
                .setColor("#b8ffab")

                if (message.guild.id === '354062777737936896')
                {
                    user_t.addRole('367796714586898433') // LSSD
                    user_t.addRole('354074458618855444') // LSSD - Prob. Dep.
                    user_t.addRole('354095488666042380') // Law Enforcement
                    user_t.addRole('354095512225316876') // First Responders
                    
                    SAHP_c.send(embed)
                }
                else
                {
                    message.channel.send(embed)
                }
            }

            else if (args[1] === 'safd' && (message.member.roles.has('354087776259538954') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
            {
                let SAFD_c = message.guild.channels.find('name', 'jcrp-safd')
                let embed = new Discord.RichEmbed()
                .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                .setDescription(user_t + " has passed their SAHP training and has been given SAHP department roles! Give them a warm welcome!")
                .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
                .setTimestamp()
                .setColor("#b8ffab")

                if (message.guild.id === '354062777737936896')
                {
                    user_t.addRole('367796857272926218') // SAFD
                    user_t.addRole('354086496996818946') // SAFD - Prob. Firefighter
                    user_t.addRole('354095512225316876') // First Responders

                    SAFD_c.send(embed)
                }
                else
                {
                    message.channel.send(embed)
                }
            }

            else
            {
                message.channel.send(user_s + ", improper usage. `" + prefix + module.exports.help.name + " user dept`")
            }
        }
        else
        {
            message.channel.send(user_s + ", improper usage. `" + prefix + module.exports.help.name + " user dept`. No arguments provided.")
        }

    }
    else
    {
        message.channel.send(user_s + ", you do not have permission to use that command.")
    }
    console.log(message.author + " entered a command [ " + module.exports.help.name + " ]\nargs[0]: " + args[0] + "\nargs[1]: " + args[1])
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: 'dept'
}