const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(message.author.id !== "264662751404621825") return
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