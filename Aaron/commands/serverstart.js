const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let server;
    if (args[0] === 's1')
        server = 'S1 | Main';
    if (args[0] === 's2')
        server = 'S2 | Secondary';
    if (args[0] === 'tr')
        server = 'TR | Training';
    if (args[0] === 'dv')
        server = 'DV | Development';
    else
        server = 'Undefined';

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + '#' + message.author.discriminator + ' started server: ', message.author.avatarURL)
    .setDescription(server)
    message.channel.send(embed);


    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'webhooktest'
}