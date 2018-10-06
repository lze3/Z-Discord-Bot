const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    var wshShell = new ActiveXObject('WScript.Shell');
    
    if(args[1] === 'dev') {
        wshShell.Run('C:\\Users\\Administrator\\Desktop\\dv.bat')
        message.channel.send('Development server should\'ve been started.')
    }
}

module.exports.help = {
    name: "start"
}