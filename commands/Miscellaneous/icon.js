const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let requester;
    if (user)
        requester = user;
    if (!user)
        requester = `<@!${message.author.id}>`;

    message.channel.send(requester + ' requested the server logo. Here you go:', {
        file: 'https://cdn.discordapp.com/attachments/372942940550463488/481294407845281793/Untitled-52.png'
    }).then(msg => msg.delete(10000));

    message.delete().catch(O_o => {});
    
}

module.exports.help = {
    name: 'icon',
    active: true
}