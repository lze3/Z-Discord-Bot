const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    let inviteCode = args[0] ? args[0] : "EqC2wFf"
    Client.fetchInvite(inviteCode).then(invite => {
        var embed = new Discord.RichEmbed()
        .setAuthor(invite.guild.name, invite.guild.iconURL)
        .addField("Inviter", invite.inviter.username + "#" + invite.inviter.discriminator, true)
        .addField("Channel", `#${invite.channel.name}`, true)
        .addField("Members", invite.guild.memberCount, true)
        .setFooter("ID: " + invite.guild.id)
        .setColor("#117EA6")

        message.channel.send(embed)
    })
}

module.exports.help = {
    name: 'inviteinfo'
}