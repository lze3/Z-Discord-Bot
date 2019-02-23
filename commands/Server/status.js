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

module.exports.run = async (bot, message, args) => {
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
        Title = "Server Information"
    }

    try {
        let api1 = `http://${IP}/players.json`
        let api2 = `http://${IP}/info.json`
        request.get(api2, {timeout: 2000},function (err, response, main) {
            if (err) return error(message.channel, `IP: ${IP}`)
            request.get(api1, {timeout: 2000},function (err, response, body) {
                if (err) return error(message.channel, `IP: ${IP}`)
                request.get(`https://policy-live.fivem.net/api/policy/${JSON.parse(main).vars.sv_licenseKeyToken}`, {timeout: 2000}, function(err, response, content) {
                    if (err) return error(message.channel, `IP: ${IP}`)
                    try {
                        var start = JSON.parse(body)
                        var start2 = JSON.parse(main)
                        var start3 = JSON.parse(content)
                
                        if (start == null || start == []) {
                            var playersCount = 0
                        } else {
                            var playersCount = start.length;
                        }

                        if (start3 === [] || start3.length === 0) {
                            var policy = `No policy.`
                        } else {
                            var policy = `${start3.join("\n")}`
                        }
                        
                        var embed = new Discord.RichEmbed()
                        .setColor("#54C86D")
                        .setAuthor("Server Information" , 'https://i.imgur.com/PnzJ35e.png')
                        .addField("Server IP", IP)
                        .addField("Status", "Online")
                        .addField("Players", playersCount + " | " + start2.vars.sv_maxClients)
                        .addField("Server Version", start2.server)
                        .addField("OneSync Enabled", start2.vars.onesync_enabled)
                        .addField("ScriptHook Enabled", start2.vars.sv_scriptHookAllowed)
                        .addField("Server License Key Token", start2.vars.sv_licenseKeyToken)
                        .addField("Policy", policy)

                        message.channel.send(embed);
                    } catch (err) {
                        error(message.channel, `Server IP: ${IP}`)
                        console.log(err.toString())
                    }

                    })

                })
        
            })
        
    } catch (err) {
        return;
    }

  };
  
  exports.help = {
    name: "status",
  };

  
  