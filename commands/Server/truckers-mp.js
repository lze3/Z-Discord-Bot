const Discord = require('discord.js');
const request = require('request');

module.exports.run = async(Client, message, args) => {
    message.delete();
    if (!args) return;
    TYPE = "servers"
    if (args[0] === "pid") { TYPE = "players" }
    if (args[0] === "servers") { TYPE = "servers" }
    if (TYPE === "players") 
    {
        let PID = args[1];
        request.get(`https://api.truckersmp.com/v2/player/${PID}`, function(err, response, body) 
        {
            let main = JSON.parse(body);
            if (main.err) { message.channel.send(err.toString()); return }
            
            if (main.response === undefined) 
            {
                var err_embed = new Discord.RichEmbed()
                .setAuthor("TruckersMP Player Information", "https://w.wew.wtf/laugpu.png")
                .setColor("#F44336")
                .setDescription("Unable to find player with that ID.")
                .setTimestamp()

               message.channel.send(err_embed)
               return;
            }
            let embed = new Discord.RichEmbed()
            .setAuthor("TruckersMP Player Information", "https://w.wew.wtf/laugpu.png")
            .setColor("#F44336")
            .addField("Player Name", main.response.name, true)
            .addField("Player ID", main.response.id, true)
            .addField("Ban Status", main.response.banned ? `Yes, banned until \`${main.response.bannedUntil}\`` : "Not banned.")
            .addField("Join Date", main.response.joinDate)
            .addField("Is admin?", main.response.isGameAdmin ? "Yes." : "No.")
            .addField("Group", main.response.groupName + " | " + main.response.groupID)
            .setTimestamp()

            message.channel.send(embed)
        })
    }
    else if (TYPE === "servers") 
    {
        // Instead of handling errors, just set these default values
        let GAME = args[1] ? args[1].toLowerCase() : "ETS2"
        let SERVER = args[2] ? args[2].toLowerCase() : "EU2"
        if (GAME === "ets2") 
        {
            if (SERVER === "eu" || SERVER === "eu1")
            {
                server = "EU #1" // Use the information from that table
            }
            else if (SERVER === "eu2") 
            {
                server = "EU #2" 
            }
            else if (SERVER === "eu3")
            {
                server = "EU #3"
            }
            else if (SERVER === "eu4")
            {
                server = "EVENT"
            }
        }
        else if (GAME === "ats")
        {
            if (SERVER === "us" || SERVER === "us1")
            {
                server = "US #1"
            }
            else if (SERVER === "eu")
            {
                server = "EU #2"
            }
        }
        request.get(`https://api.truckersmp.com/v2/servers/`, function(err, response, body) 
        {
            
            var main = JSON.parse(body);
            main.response.forEach(table => {
                if (table.game.includes(GAME) && table.shortname.includes(server))
                {
                    server_info = 
                    {
                        ["id"]: table.id,
                        ["game"]: "Euro Truck Simulator 2",
                        ["ip"]: table.ip + ":" + table.port,   
                        ["serverName"]: table.name,
                        ["online"]: table.online ? "Yes" : "No :cry:",
                        ["players"]: table.players,
                        ["queue"]: table.queue == 0 ? "None." : table.queue,
                        ["maxClients"]: table.maxplayers,
                        ["speedLimiter"]: table.speedlimited == 1 ? "Enabled." : "Disabled.",
                        ["collisions"]: table.collisions ? "Enabled." : "Disabled.",
                        ["cars"]: table.carsforplayers ? "Enabled." : "Disabled.",
                        ["policeCars"]: table.policecarsforplayers ? "Everybody can use." : "Only Game Moderators.",
                        ["afkKick"]: table.afkenabled ? "Enabled." : "Disabled.",
                        ["syncDelay"]: table.syncdelay
                    }  
                }
                else
                {
                    if (table.game.includes("ETS2") && table.shortname.includes("EU #2"))
                    {
                        server_info = 
                        {
                            ["id"]: table.id,
                            ["game"]: "Euro Truck Simulator 2",
                            ["ip"]: table.ip + ":" + table.port,   
                            ["serverName"]: table.name,
                            ["online"]: table.online ? "Yes" : "No :cry:",
                            ["players"]: table.players,
                            ["queue"]: table.queue == 0 ? "None." : table.queue,
                            ["maxClients"]: table.maxplayers,
                            ["speedLimiter"]: table.speedlimited == 1 ? "Enabled." : "Disabled.",
                            ["collisions"]: table.collisions ? "Enabled." : "Disabled.",
                            ["cars"]: table.carsforplayers ? "Enabled." : "Disabled.",
                            ["policeCars"]: table.policecarsforplayers ? "Everybody can use." : "Only Game Moderators.",
                            ["afkKick"]: table.afkenabled ? "Enabled." : "Disabled.",
                            ["syncDelay"]: table.syncdelay
                        }
                    }
                }
            });

            let embed = new Discord.RichEmbed()
            .setAuthor("TruckersMP Server Information", "https://w.wew.wtf/laugpu.png", "https://truckersmp.com")
            .setColor("#F44336")
            .addField("Server Name", server.serverName)
            .addField("Status", server.online)
            .addField("Game", server.game)
            .addField("IP and Port", server.ip)
            .addField("Players Online", server.players + "/" + server.maxClients)
            .addField("Players in Queue", server.queue)
            .addField("Speed Limiter", server.speedLimiter)
            .addField("Collisions", server.collisions)
            .addField("Cars", server.cars)
            .addField("Police Cars", server.policeCars)
            .addField("AFK Kick", server.afkKick)
            .addField("Sync Delay", server.syncDelay)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.user.username}#${message.member.user.discriminator}`)

            message.channel.send(embed)

        })

    }
}

module.exports.help = {
    name: 'tmp',
    active: true
}