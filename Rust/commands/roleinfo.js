module.exports.run = async(bot, message, args) => {
    if (!args[0]) return message.channel.send(message.author + ", no arguments provided.")
    let role = message.guild.roles.find('name', args.join(" "))
    if(!role) return message.reply("could not find that role.")

    message.channel.send("`" + role.name + "` ID: " + role.id)
    

}

module.exports.help = {
    name: 'roleinfo'
}