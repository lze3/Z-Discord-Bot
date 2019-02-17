const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!(message.member.roles.has('546360545133985793') || message.member.roles.has('541031422174167105'))) { return message.reply('you cannot use that command.').then(() => console.log(`${message.author} tried executing .exec`))}
    if(!args[0]) return;
    try {
        var code = args.join(" ")
        eval(code)
    } catch(err) {
        const errembed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`\`\`${err.toString()}\`\``)
        .setColor('#F46E3F')

        message.channel.send(errembed)
    }
}

module.exports.help = {
    name: 'exec'
}