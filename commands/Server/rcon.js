const Q3RCon = require('quake3-rcon')
const RConCFG = require('../../rcon_info.json')

module.exports.run = async(Client, message, args) => {
    if (!(message.member.roles.has('546360545133985793') || message.member.roles.has('541031422174167105'))) { return message.reply('you cannot use that command.').then(() => console.log(`${message.author} tried executing .exec`))}
    let server = args[0]
    if (!server) return message.reply("you need to specify a server to execute commands to. (1s or reg)")
    let command = args[1]
    if (!command) return message.reply("you need to specify a command to execute.")
    let params = args.join(" ").slice(server.length+command.length+1)
    let RegRCon = new Q3RCon({
        address: RConCFG.IP,
        port: RConCFG.Regular.Port,
        password: RConCFG.Password,
        debug: false
    })
    let OneSyncRCon = new Q3RCon({
        address: RConCFG.IP,
        port: RConCFG.OneSync.Port,
        password: RConCFG.Password,
        debug: false
    })
    if (server.toUpperCase() === "REGULAR" || server.toUpperCase() === "REG") {
        RegRCon.send(`${command} ${params}`, function(response) {
            message.reply(response.slice(6))
        })
    } else if (server.toUpperCase() === "ONESYNC" || server.toUpperCase() === "OS" || server.toUpperCase() === "1S") {
        OneSyncRCon.send(`${command} ${params}`, function(response) {
            message.reply(response.slice(6))
        })
    } else return message.reply("invalid server.")

    
}

module.exports.help = {
    name: 'rcon',
    active: true
}