const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    let title_delim = args.join(" ").split(/"(.+)"$/)
    let regex = args.join(" ").split(/^"(.+)"$/)
    if (!message.member.hasPermission("MANAGE_GUILD")) { message.author.send("You don't have permission to use that command."); return }
    if (title_delim.length <= 0) { title = "Announcement" }
    message.channel.send(`This will be the title:\n${title_delim[1]}`)

    var embed = new Discord.RichEmbed()
    .setTitle(title_delim[1])
    .setColor("#d91e18")
    .setDescription(args.join(" ").slice(title_delim.length+2))

    message.channel.send(embed)
}

module.exports.help = {
    name: "announce"
}