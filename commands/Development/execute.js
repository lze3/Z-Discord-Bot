const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) { return message.reply('you cannot use that command.').then(() => console.log(`${message.author} tried executing .exec`))}
    if(!args[0]) return;
    try {
        var code = args.join(" ")
        eval(code)
    } catch(err) {
        const errembed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`\`${err.toString()}\``)
        .setColor('#F46E3F')

        message.channel.send(errembed)
    }
}

module.exports.help = {
    name: 'exec'
}