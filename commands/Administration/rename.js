module.exports.run = async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNEL")) return 
}

module.exports.help = {
    name: 'rename'
}