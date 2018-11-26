const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('../botconfig.json')

var numPlayersOnlineS1 = 'N/A'
var playerListS1 = 'N/A'
var numResourcesS1 = 'N/A'

var numPlayersOnlineS2 = 'N/A'
var playerListS2 = 'N/A'

var numPlayersOnlineTR = 'N/A'
var playerListTR = 'N/A'

var numPlayersOnlineDV = 'N/A'
var playerListDV = 'N/A'
var numResourcesDV = 'N/A'

module.exports.run = async(bot, message, args, user) => {
    message.delete().catch(O_o=>{})
    if (args[0] === "s1") {
        UpdateFiveMServerS1()
        var http = require('http');
        http.get('http://fivem.jcrpweb.com:30123', function(res) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setDescription('Main Server Information')
            .addField('Status', 'Online <:GTick:492023314244698132>')
            .addField('Players Online', numPlayersOnlineS1)
            .addField('List of Players', playerListS1)
            .addField('Address', '<fivem://connect/fivem.jcrpweb.com:30123>')
            .addField('External', `Command entered by: ${message.author}`)
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed);
        }).on('error', function(e) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Main Server Information')
            .addField('Status', 'Offline <:RTick:492025364638597122>')
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed)        
        })
        
    }
    else
    if (args[0] === "s2") {
        UpdateFiveMServerS2()
        var http = require('http')
        http.get('http://fivem.jcrpweb.com:30124', function(res) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Secondary Server Information')
            .addField('Status', 'Online <:GTick:492023314244698132>')
            .addField('Players Online', numPlayersOnlineS2)
            .addField('List of Players', playerListS2)
            .addField('Address', '<fivem://connect/fivem.jcrpweb.cfom:30124')
            .addField('External', `Command entered by: ${message.author}`)
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed);
        }).on('error', function(e) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Secondary Server Information')
            .addField('Status', 'Offline <:RTick:492025364638597122>')
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed)        
        })
        
    }
    else
    if (args[0] === "training") {
        UpdateFiveMServerTR()
        var http = require('http')
        http.get('http://fivem.jcrpweb.com:30199', function(res) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Training Server Information')
            .addField('Status', 'Online <:GTick:492023314244698132>')
            .addField('Players Online', numPlayersOnlineTR)
            .addField('List of Players', playerListTR)
            .addField('External', `Command entered by: ${message.author}`)
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed);
        }).on('error', function(e) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Training Server Information')
            .addField('Status', 'Offline <:RTick:492025364638597122>')
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed)
        })
    }
    else 
    if (args[0] === "dv") {
        UpdateFiveMServerDV()
        var http = require('http')
        http.get('http://fivem.jcrpweb.com:301', function(res) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Development Server Information')
            .addField('Status', 'Offline <:RTick:492025364638597122>')
            .addField('Players Online', numPlayersOnlineDV)
            .addField('List of Players', playerListDV)
            .addField('Number or resources', numResourcesDV)
            .addField('External', `Command entered by: ${message.author}`)
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed)
        }).on('error', function(e) {
            let statusEmbed = new Discord.RichEmbed()
            .setTitle('JusticeCommunityRP')
            .setURL('http://jcrpweb.com')
            .setDescription('Development Server Information')
            .addField('Status', 'Offline <:RTick:492025364638597122>')
            .setColor('#9ae7ff')
            message.channel.send(statusEmbed)
        })
    }
    else 
        message.channel.send(`${message.author}, use ${config.prefix}status (s1, s2, training, dv)`);

}

var request = require('request')

function UpdateFiveMServerS1()
{
    server = `http://fivem.jcrpweb.com:30123/players.json`
    serverback = `http://fivem.jcrpweb.com:30123/info.json`
    request(server, function(error, response, html){
        if(!error){
            var r = JSON.parse(html)
            if(r)
            {
                numPlayersOnlineS1 = r.length
                playerListS1 = r.map(p => `${p.name} | ${p.id}`).join('\n')
            }
            else
            {
                numPlayersOnlineS1 = 'N/A'
                playerListS1 = '-'
            }
            if(r.length === 0)
            {
                numPlayersOnlineS1 = 0
                playerListS1 = 'N/A'
            }
            if(r.length >= 32)
            {
                numPlayersOnlineS1 = `${r.length} **(FULL)**`
                playerListS1 = r.map(p => `${p.name} | ${p.id}`).join(`\n`)
            }
        }
        else
        {
            numPlayersOnlineS1 = 0
            playerListS1 = '-'
        }
    })
}

UpdateFiveMServerS1()
setInterval(UpdateFiveMServerS1, 60000)

function UpdateFiveMServerS2()
{
    server = `http://fivem.jcrpweb.com:30124/players.json`
    request(server, function(error, response, html){
        if(!error){
            var r = JSON.parse(html)
            if(r)
            {
                numPlayersOnlineS2 = r.length
                playerListS2 = r.map(p => `${p.name} | ${p.id}`).join('\n')
            }
            else
            {
                numPlayersOnlineS2 = 'N/A'
                playerListS2 = '-'
            }
            if(r.length === 0)
            {
                numPlayersOnlineS2 = 0
                playerListS2 = 'N/A'
            }
            if(r.length >= 32)
            {
                numPlayersOnlineS2 = '32 **(FULL)**'
                playerListS2 = r.map(p => `${p.name} | ${p.id}`).join(`\n`)
            }
        }
        else
        {
            numPlayersOnlineS2 = 0
            playerListS2 = '-'
        }
    })
}

UpdateFiveMServerS2()
setInterval(UpdateFiveMServerS2, 60000)

function UpdateFiveMServerTR()
{
    server = `http://fivem.jcrpweb.com:30199/players.json`
    request(server, function(error, response, html){
        if(!error){
            var r = JSON.parse(html)
            if(r)
            {
                numPlayersOnlineTR = r.length
                playerListTR = r.map(p => `${p.name} | ${p.id}`).join('\n')
            }
            else
            {
                numPlayersOnlineTR = 'N/A'
                playerListTR = '-'
            }
            if(r.length === 0)
            {
                numPlayersOnlineTR = 0
                playerListTR = 'N'
            }
            if(r.length >= 32)
            {
                numPlayersOnlineTR = '32 **(FULL)**'
                playerListTR = r.map(p => `${p.name} | ${p.id}`).join(`\n`)
            }
        }
        else
        {
            numPlayersOnlineTR = 0
            playerListTR = '-'
        }
    })
}

UpdateFiveMServerTR()
setInterval(UpdateFiveMServerTR, 60000)

function UpdateFiveMServerDV()
{
    server = `http://fivem.jcrpweb.com:301/players.json`
    serverback = `http://fivem.jcrpweb.com:301/info.json`
    request(server, function(error, response, html){
        if(!error){
            var r = JSON.parse(html)
            if(r)
            {
                numPlayersOnlineDV = r.length
                playerListDV = r.map(p => `${p.name} | ${p.id}`).join('\n')
            }
            else
            {
                numPlayersOnlineDV = 'N/A'
                playerListDV = '-'
            }
            if(r.length === 0)
            {
                numPlayersOnlineDV = 0
                playerListDV = 'N/A'
            }
            if(r.length >= 32)
            {
                numPlayersOnlineDV = '32 **(FULL)**'
                playerListDV = r.map(p => `${p.name} | ${p.id}`).join(`\n`)
            }
        }
        else
        {
            numPlayersOnlineDV = 0
            playerListDV = '-'
        }
    })
}

UpdateFiveMServerDV()
setInterval(UpdateFiveMServerDV, 60000)

module.exports.help = {
    name: 'status'
}