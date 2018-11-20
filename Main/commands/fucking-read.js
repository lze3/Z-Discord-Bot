const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!(message.member.roles.has('481541340337930269') /* Director */ || message.member.roles.has('501076418399043604') /*Internal Admin */))
    {
        message.channel.send("Lmao! " + message.author + " just tried using `;fucking-read`. Of course he failed :joy:")
    }
    else
    {
        message.channel.send({
            file: 'https://cdn.discordapp.com/attachments/372943832876056576/509766520360927252/image0.jpg'
        })
    }    
}

module.exports.help = {
    name: 'fucking-read'
}