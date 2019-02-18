const Discord = require('discord.js')
const request = require("request");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const _api = "https://servers-live.fivem.net/api/servers/";
    let _includes = args.join(" ").slice(args[0].length + 1)

    if (args[0] === 'hostname') {
        request({            
            uri: _api,
            json: true
        }, (error, response, body) => {
            let Servers = ""
            for (let server of body)
                if (server.Data.hostname.includes(_includes) || server.Data.hostname.includes(_includes.toUpperCase())) {
                    Servers += server.EndPoint + " - " +  server.Data.hostname + "\n"
                }

                let numb = Math.floor(Math.random() * 9999) + 1000
                fs.writeFile(`logs_\\${_includes.toUpperCase()}-${numb}.txt`, Servers, function(err) {
                    try {
                        message.channel.send("Search results for hostname containing " + _includes + ":", {file: `logs_\\${_includes.toUpperCase()}-${numb}.txt`})
                        console.log(_includes + " -> _includes")
                        console.log(args[0] + " -> args[0]")
                        console.log(args[1] + " -> args[1]")
                    } catch(err) {
                        console.log(err)
                    }
                })

        })
    } else if (args[0] === 'resources') {
        request({
            uri: _api,
            json: true
        }, (error, response, body) => {
            let Servers = ""
            for (let server of body)
                if (JSON.stringify(server.Data.resources).includes(_includes) || JSON.stringify(server.Data.resources).includes(_includes.toUpperCase())) {
                    Servers += server.EndPoint + " - " + server.Data.hostname + "\n"
                }

                let numb = Math.floor(Math.random() * 9999) + 1000
                fs.writeFile(`logs_\\${_includes.toUpperCase()}-${numb}.txt`, Servers, function(err) {
                    try {
                        message.channel.send("Search results for resources containing " + _includes + ":", {file: `logs_\\${_includes.toUpperCase()}-${numb}.txt`})
                    } catch(err) {
                        console.log(err)
                    }
                })
        })
    }
}

module.exports.help = {
    name: 'apic'
}