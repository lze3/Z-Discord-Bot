const Discord = require('discord.js')
const request = require("request");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    const _api = "https://servers-live.fivem.net/api/servers/";
    let _includes = args.join(" ")

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
        let numb1 = Math.floor(Math.random() * 9999) + 1000
        let numb2 = Math.floor(Math.random() * 9999) + 1000
        let numb3 = Math.floor(Math.random() * 9999) + 1000
        fs.writeFile(`logs_\\${numb}-${numb1}-${numb2}-${numb3}.txt`, Servers, function(err) {
            try {
                message.channel.send("Search results:", {file: `logs_\\${numb}-${numb1}-${numb2}-${numb3}.txt`})
            } catch(err) {
                console.log(err)
            }
        })

    })
}

module.exports.help = {
    name: 'apic'
}