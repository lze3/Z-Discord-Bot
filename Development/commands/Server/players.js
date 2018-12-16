const request = require('request')
const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async (bot, message, args) => {
    let server = args[0];

    if(!server) {
        let embed = new Discord.RichEmbed()
           .setTitle("Server not specified")
           .setDescription("S1 = Main Server\nS2 = Secondary Server\nTR = Training Server")
           .setColor("#FABF32")
           return message.channel.send(embed)
    }
    else if(server.toUpperCase() === "S1"){
        IP = "149.56.241.128:30123"
        Title = "JCRP Server 1"
    }
    else if(server.toUpperCase() === "S2"){
        IP = "149.56.241.128:30124"
        Title = "JCRP Server 2"
    }
    else if(server.toUpperCase() === "TR"){
        IP = "149.56.241.128:30199"
        Title = "JCRP Training Server"
    }
    else {
        let embed = new Discord.RichEmbed()
           .setTitle("Incorrect Server")
           .setDescription("S1 = Main Server\nS2 = Secondary Server\nTR = Training Server")
           .setColor("#FABF32")
        return message.channel.send(embed)
    }

        let avatar = "https://i.imgur.com/ODI3OLT.png"
        let api1 = `http://${IP}/players.json`
        let api2 = `http://${IP}/info.json`
    try {
        request.get(api2, {timeout: 2000}, function (err, response, main) {
            if(err) {
                var embed = new Discord.RichEmbed()
                .setColor("#FF470F") // 
                .setAuthor(Title , avatar, `http://jcrpweb.com`)
                .addField("Server IP", IP)
                .addField("Status", "Offline")
                .addField("Players", "Server Offline")

                return message.channel.send(embed);
            }
            request.get(api1, {timeout: 2000}, function (err, response, body) {
                

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
                .setTitle(`Player count: ${playersCount}/${start2.vars.sv_maxClients}`)
                .setDescription(start.map(element => '**' + element.name + "**  \/ ID: ``" + element.id + "``").join("\n\n"))
                .setFooter(`Server IP: ${IP}`)
                message.channel.send(embed);
            

            })
        
        })
    } catch (err) { 
        var embed = new Discord.RichEmbed()
                        .setColor("#FF470F") 
                        .setAuthor(Title , avatar, `http://jcrpweb.com`)
                        .addField("Server IP", IP)
                        .addField("Status", "Offline")
                        .addField("Players", "Server Offline")
        message.channel.send(embed)
    }

  };
  
  exports.help = {
    name: "players",
  };
  
  
  
  