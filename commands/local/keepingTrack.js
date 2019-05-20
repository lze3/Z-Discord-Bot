const Discord = require('discord.js');

let beingTracked = false;
let site = "";
let title = "Website Status Tracking";
let state = "Obtaining information from site...";

module.exports.run = async(Client, message, args) => {
    if (args[0] === 'set') {
        site = args[1] ? args[1] : "https://policy-live.fivem.net";
        beingTracked = !beingTracked // toggle
        if (!message.member.hasPermission("BAN_MEMBERS")) return;
        request.get(site, function(err, response, body) {
            if (err) {
                return state = err.toString();
            }

            state = response.body
        })

        let embed = new Discord.RichEmbed()
        .setTitle(title)
        .setDescription(state)

        message.channel.send(embed).then(msg => {
            setInterval(() => {
                if (beingTracked) {
                    msg.edit({                        
                        embed: {
                            title: title,
                            description: state,
                            color: 14602065,
                            footer: {
                                text: site
                            },
                            timestamp: new Date()
                        }
                    })
                } else {
                    msg.edit({
                        embed: {
                            title: title,
                            description: "This site is no longer being tracked.",
                            footer: {
                                text: site
                            },
                            timestamp: new Date() 
                        }
                    })
                    return
                }
            }, 2500);
        }).catch(err => {
            message.channel.send(err)
        }) 
    } else if (args[0] === 'disable') {
        beingTracked = false;
        message.channel.send(`I stopped tracking ${site === "" ? "the site" : "<" + site + ">"} for you, ${message.author}`);
    }
}

module.exports.help = {
    name: "kt",
    active: true
}