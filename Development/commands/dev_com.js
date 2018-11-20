const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!(message.member.roles.has('481541340337930269') || message.guild.name === 'JusticeCommunityRP - Development'))
    {
        message.channel.send("You do not have permission to use that command.")
    }
    else
    {
        if (args[0] === 'whois')
        {
            message.channel.send("whois?")
        }
        else
        if (args[0] === 'guild-info')
        {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name + " - Server Information", message.guild.iconURL)
            .addField("Owner", message.guild.owner, true)
            .addField("Member Count", message.guild.memberCount, true)
            .addField("Verification Level", message.guild.verificationLevel, true)
            .addField("Region", message.guild.region, true)
            .addBlankField(true)
            .setColor('#9ae7ff')

            message.channel.send(embed)
        }
        else
        if (args[0] === 'role-color')
        {
            message.channel.send(message.guild.roles.find("name", "San Andreas Highway Patrol").hexColor)
        }
        else
        if (args[0] === 'cname')
        {
            let c_embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name + " - Channel Information", message.guild.iconURL)
            .addField("Channel Name", message.channel.name, true)
            .addField("Channel ID", message.channel.id, true)
        
            message.channel.send(c_embed)
        }
        else
        {
            message.channel.send("No args provided.")
        }
    }
}

module.exports.help = {
    name: 'dev_com'
}