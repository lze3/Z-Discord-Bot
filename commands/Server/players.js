const request = require('request')
const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

function error(channel, ip) {
    embed = new Discord.RichEmbed()
    .setTitle("Error")    
    .setColor('#FA3838')
    .setDescription("Server could not be reached.")
    .setFooter(ip)
    channel.send(embed)
}

module.exports.run = async (Client, message, args) => {
    let server = args[0];

    if(!server) {
        let embed = new Discord.RichEmbed()
        .setTitle("Error")    
        .setColor('#FA3838')
        .setDescription("Server could not be found.")
        return message.channel.send(embed)
    }
    else {
        IP = args.join(" ")
    }

    let avatar = "https://i.imgur.com/ODI3OLT.png"
    let api1 = `http://${IP}/players.json`
    let api2 = `http://${IP}/info.json`
    try {
        request.get(api2, {timeout: 2000}, function (err, response, main) {
            if (err) return error(message.channel, `IP: ${IP}`)
            request.get(api1, {timeout: 2000}, function (err, response, body) {
                if (err) return error(message.channel, `IP: ${IP}`)
                    try {

                        var start = JSON.parse(body)
                        var start2 = JSON.parse(main)
                
                        if (start == null || start == []) {
                            var playersCount = 0
                        } else {
                            var playersCount = start.length;
                        }

                        var embed = new Discord.RichEmbed()
                        .setColor("#54C86D")
                        .setAuthor("Server Information" , `https://i.imgur.com/PnzJ35e.png`)
                        .setTitle(`Player count: ${playersCount}/${start2.vars.sv_maxClients}`)
                        .setDescription(start.map(element => '**' + element.name + "**  | ID: ``" + element.id + "``").join("\n\n"))
                        .setFooter(`Server IP: ${IP}`)
                        message.channel.send(embed);
                    } catch (err) {
                        error(message.channel, `Server IP: ${IP}`)
                    }

            

            })
        
        })
    } catch (err) { 
        error(message.channel, `Server IP: ${IP}`)
    }

  };
  
  exports.help = {
    name: "players",
  };
  
  
  
  