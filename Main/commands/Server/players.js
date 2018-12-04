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
        return message.channel.send(message.author + ", invalid server. `" + prefix + module.exports.help.name + " server`. Servers: `S1`, `S2`, `TR`")
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
                    .setAuthor(Title , avatar, `https://jcrpweb.com`)
                    .setDescription(`Member count: **${playersCount}**/**${start2.vars.sv_maxClients}**\n\n` + start.map(element => '**' + element.name + "**  |  `" + element.id + "`").join("\n\n"))
                    .setFooter(`Server IP: ${IP}`)
                    message.channel.send(embed);
                } catch (err) {
                    console.log(err)
                    error.invalid(message, "Server", "Server cannnot be reached.")
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
  
  