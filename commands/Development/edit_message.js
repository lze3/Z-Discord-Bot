const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    let msg_id = args[0]
    if(!args[0]) return
    if(!message.member.roles.has("481541340337930269")) return
    message.channel.fetchMessage(msg_id).then(msg => msg.edit(args.join(" ").slice(19)))
}

module.exports.help = {
    name: 'edit',
    active: true
}