module.exports.run = async(Client, message, args) => {
    message.channel.send(message.guild.memberCount.toLocaleString('en-US'))
}

module.exports.help = {
    name: 'membercount',
    active: true
}