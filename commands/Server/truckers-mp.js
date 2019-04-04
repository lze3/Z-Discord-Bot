const Discord = require('discord.js');
const request = require('request');

module.exports.run = async(Client, message, args) => {
    message.delete();
    if (!args) return;
    if (args[0].toLowerCase() === "pid") 
    {
        let PID = args[1];
        request.get(`https://api.truckersmp.com/v2/player/${PID}`, function(err, response, body) 
        {
            var main = JSON.parse(body);
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
            var embed = new Discord.RichEmbed()
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
    else 
    if (args[0].toLowerCase() === "servers") 
    {
        // Instead of handling errors, just set these default values
        let GAME = args[1] ? args[1].toLowerCase() : "ETS2"
        let SERVER = args[2] ? args[2].toLowerCase() : "EU2"
        request.get(`https://api.truckersmp.com/v2/servers/`, function(err, response, body) 
        {
            
            var main = JSON.parse(body);
            main.response.forEach(table => {
                if (table.game.includes("ETS2") && table.shortname.includes("EU #1"))
                {
                    ETS2_EU1 = 
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
                else if (table.game.includes("ETS2") && table.shortname.includes("EU #2"))
                {
                    ETS2_EU2 = 
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
                else if (table.game.includes("ETS2") && table.shortname.includes("EU #3"))
                {
                    ETS2_EU3 = 
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
                else if (table.game.includes("ETS2") && table.shortname.includes("EVENT"))
                {
                    ETS2_EU4 = 
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
                else if (table.game.includes("ATS") && table.shortname.includes("US"))
                {
                    ATS_US1 =
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
                else if (table.game.includes("ATS") && table.shortname.includes("EU #2"))
                {
                    ATS_EU2 =
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
            });
            
            server = ETS2_EU2 // This will be the default server

            // Let's handle the correct information to display here...
            if (GAME === "ets2") 
            {
                if (SERVER === "eu" || SERVER === "eu1")
                {
                    server = ETS2_EU1 // Use the information from that table
                }
                else if (SERVER === "eu2") 
                {
                    server = ETS2_EU2 
                }
                else if (SERVER === "eu3")
                {
                    server = ETS2_EU3
                }
                else if (SERVER === "eu4")
                {
                    server = ETS2_EU4
                }
            }
            else if (GAME === "ats")
            {
                if (SERVER === "us" || SERVER === "us1")
                {
                    server = ATS_US1
                }
                else if (SERVER === "eu")
                {
                    server = ATS_EU2
                }
            }

            var embed = new Discord.RichEmbed()
            .setAuthor("TruckersMP Server Information", "https://w.wew.wtf/laugpu.png")
            .setColor("#F44336")
            .addField("Server Name", server.serverName)
            .addField("Game", server.game)
            .addField("Players Online", server.players + "/" + server.maxClients)
            .addField("Players in Queue", server.queue)
            .addField("Speed Limiter", server.speedLimiter)
            .addField("Collisions", server.collisions)
            .addField("Cars", server.cars)
            .addField("Police Cars", server.policeCars)
            .addField("AFK Kick", server.afkKick)
            .addField("Sync Delay", server.syncDelay)
            .setTimestamp()

            message.channel.send(embed)

        })

    }
}

module.exports.help = {
    name: 'tmp'
}