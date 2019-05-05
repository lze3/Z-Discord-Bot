const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

let enabled = true

module.exports.run = async(Client, message, args) => {
    let report = args.join(" ").slice(22)
    if(enabled)
    {
        if(args[0] && args[1] !== '')
        {
            if(report !== '')
            {
                let report_c = message.guild.channels.find('name', 'jcrp-discord_reports')
                if(report_c)
                {
                    let embed = new Discord.RichEmbed()
                    .setTitle("Player Report")
                    .addField("Offender", args[0], true)
                    .addField("Report Creator", message.author, true)
                    .addField("Reason", report, true)
                    .setTimestamp()
                    .setColor("#9ae7ff")

                    report_c.send(embed)
                }
                else
                {
                    message.channel.send(message.author + ", this channel does not exist. Contact <@!264662751404621825> about this.")
                }
            }
            else
            {
                message.channel.send(message.author + ", improper usage. `" + prefix + module.exports.help.name + " user reason`.")
            }

        }
        else
        {
            message.channel.send(message.author + ", improper usage. `" + prefix + module.exports.help.name + " user reason`.")
        }
    }
    else
    {
        message.channel.send(message.author + ", this command is disabled.")
    }

}

module.exports.help = {
    name: 'report',
    active: true
}