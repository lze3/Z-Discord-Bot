const Discord = require('discord.js');
const request = require('request');

let logChannel = "582334253681868810"
let state = "Obtaining site information..."
let title = "FiveM Server Information"
let colour = "#3BE08D"

module.exports.run = async(Client, message, args) => {
    logChannel = message.guild.channels.get(logChannel)
    request.get("https://servers-live.fivem.net/api/servers/single/142.44.214.152:704", {timeout: 2000}, function(err, response, body) {
        if (err) {
            return info = err.toString()
        }

        let info = JSON.parse(body)
        let hostname = info.Data.hostname.replace(/\^[0-9]/g, "")
        let players = ""
        info.Data.players.forEach(element => {
            players += element.name + "\n"
        });

        let embed = new Discord.RichEmbed()
        .setTitle(title)
        .addField("Players", players)
        .setDescription(hostname)
        .setColor(colour)

        logChannel.send(embed).then(msg => {
            setInterval(() => {
                msg.edit({
                    embed: {
                        title: hostname + " - " + title,
                        description: info.Data.mapname,
                        fields: {
                            ["field"]: {
                                name: "Players",
                                value: players
                            }
                        },
                        color: 3924109,
                        timestamp: new Date()
                    }
                })
            }, 2500)
        })
    })

   
}

module.exports.help = {
    name: 'stats',
    active: true
}

