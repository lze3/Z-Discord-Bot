const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {    
    let cName = "▌" + args.join(" ")
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("you do not have permission to use that command.")
    if(!args[0]) return message.reply("no arguments provided.")

    message.guild.createChannel(cName, "voice").then(channel => channel.setParent("518617378893070366") && channel.lockPermissions("518617378893070366"))
    message.channel.send("Channel created.")
    console.log("Channel created [ #" + cName + " ].")

}

module.exports.help = {
    name: 'addchannel'
}