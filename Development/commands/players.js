const request = require('request')
const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    let server = args[0];

    if(!server) {
        let embed = new Discord.RichEmbed()
           .setTitle("Server not specified")
           .setDescription("S1 = Public 1\nS2 = Public 2\n Tr = Training\n Dev = Development")
           .setColor("#FABF32")
           return message.channel.send(embed)
    }
    else if(server.toUpperCase() === "S1"){
        IP = "149.56.241.128:30123"
        Title = "JCRP Server 1"
    }
    else if(server.toUpperCase() === "S2"){
        IP = "149.56.241.128:30124"
        Title = "JCRP Server 1"
    }
    else if(server.toUpperCase() === "TR"){
        IP = "149.56.241.128:30199"
        Title = "JCRP Training Server"
    }
    else {
        let embed = new Discord.RichEmbed()
           .setTitle("Incorrect Server")
           .setDescription("S1 = Public 1\nS2 = Public 2\n Tr = Training")
           .setColor("#FABF32")
        return message.channel.send(embed)
    }

    try {
        let avatar = "https://i.imgur.com/ODI3OLT.png"
        let api1 = `http://${IP}/players.json`
        let api2 = `http://${IP}/info.json`
        request(api2, function (err, response, main) {
            request(api1, function (err, response, body) {
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
                    .setDescription(`**${playersCount}** out of **${start2.vars.sv_maxClients}** Players.\n\n` + start.map(element => '**' + element.name + "**  \/ ID: ``" + element.id + "``").join("\n\n"))
                    .setFooter(`Server IP: ${IP}`)
                    message.channel.send(embed);
                } catch (err) {
                    console.log(err)
                    error.invalid(message, "Server", "Server cannnot be reached (Offline)")
                }
            

                })
        
            })
        
    } catch (err) {
        console.log(err)
        message.channel.send("Server is ``Offline``")
    }

  };
  
  exports.help = {
    name: "players",
  };
  
  