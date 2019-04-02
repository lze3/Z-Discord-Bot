const request = require('request')
const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

function error(channel, ip, errorCode) {
    errCode = "Could not determine status code."
    if (errorCode.toString() === "1") 
        errCode = "404 - `info.json could not be reached.`"
    if (errorCode.toString() === "2")
        errCode = "404 - `players.json could not be reached.`"
    if (errorCode.toString() === "3")
        errCode = "404 - `Server policy could not be obtained.`"
    embed = new Discord.RichEmbed()
    .setTitle("Error")    
    .setColor('#FA3838')
    .setDescription("Server could not be reached.")
    .addField("Error Code")
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
        Title = "Server Information"
    }

    try {
        let api1 = `http://${IP}/players.json`
        let api2 = `http://${IP}/info.json`
        request.get(api2, {timeout: 2000},function (err, response, main) {
            if (err) return error(message.channel, `IP: ${IP}`, 1)
            request.get(api1, {timeout: 2000},function (err, response, body) {
                if (err) return error(message.channel, `IP: ${IP}`, 2)
                request.get(`https://policy-live.fivem.net/api/policy/${JSON.parse(main).vars.sv_licenseKeyToken}`, {timeout: 2000}, function(err, response, content) {
                    if (err) return error(message.channel, `IP: ${IP}`, 3)
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

  
  