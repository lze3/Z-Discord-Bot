const request = require('request')
const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async (bot, message, args) => {
    let server = args[0];

    if (!message.member.roles.has('481541340337930269')) return message.channel.send(message.author + ", this command is temporarily disabled.")

    if(!server) {
        return message.channel.send(message.author + ", invalid server. `" + prefix + module.exports.help.name + " server`. Servers: `S1`, `S2`, `TR`")
    }
    else if(server.toUpperCase() === "S1" || server === 's1'){
        IP = "149.56.241.128:30123"
        Title = "JusticeCommunityRP - Main Server"
    }
    else if(server.toUpperCase() === "S2" || server === 's2'){
        IP = "149.56.241.128:30124"
        Title = "JusticeCommunityRP - Secondary Server"
    }
    else if(server.toUpperCase() === "TR" || server === 'tr'){
        IP = "149.56.241.128:30199"
        Title = "JusticeCommunityRP - Training Server"
    }
    else {
        return message.channel.send(message.author + ", invalid server. `" + prefix + module.exports.help.name + " server`. Servers: `S1`, `S2`, `TR`")
    }

    try {
        let avatar = "https://i.imgur.com/ODI3OLT.png"
        let api1 = `http://${IP}/players.json`
        let api2 = `http://${IP}/info.json`
        request.get(api2, {timeout: 2000},function (err, response, main) {
            request.get(api1, {timeout: 2000},function (err, response, body) {
                try {
                    var start = JSON.parse(body)
                    var start2 = JSON.parse(main)
            
                    if (start == null || start == []) {
                        var playersCount = 0
                    } else {
                        var playersCount = start.length;
                    }

                    var embed = new Discord.RichEmbed()
                    .setColor("#9ae7ff")
                    .setAuthor(Title , avatar, `http://jcrpweb.com`)
                    .addField("Server IP", IP)
                    .addField("Status", "Online")
                    .addField("Players", playersCount + " | " + start2.vars.sv_maxClients)

                    message.channel.send(embed);
                } catch (err) {
                    var embed = new Discord.RichEmbed()
                    .setColor("#FF470F") 
                    .setAuthor(Title , avatar, `http://jcrpweb.com`)
                    .addField("Server IP", IP)
                    .addField("Status", "Offline")
                    .addField("Players", "Server Offline")

                    message.channel.send(embed);
                }
            

                })
        
            })
        
    } catch (err) {
        return;
    }

  };
  
  exports.help = {
    name: "status",
  };
  
  