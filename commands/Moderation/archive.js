const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    message.delete()
    const channel = message.mentions.channels.first()
    const archive_category = "548287037418242058"
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("you do not have permission to execute that command.")
    if (!channel) return message.reply("that is not a channel.")
    await message.guild.channels.get(channel.id)
    await message.guild.channels.get(channel.id).setParent(archive_category)
    await message.guild.channels.get(channel.id).lockPermissions()

    let embed_psa = new Discord.RichEmbed()
    .setTitle("Channel Archived")
    .setDescription(`This channel is archived and is no longer in use. `)
    .setTimestamp()
    .setThumbnail(message.guild.iconURL)
    .setColor('#EA5343')
    channel.send(embed_psa)

    message.channel.send(`:white_check_mark: **Channel #${channel.name} was successfully deleted.**`)
}

module.exports.help = {
    name: 'delete'
}