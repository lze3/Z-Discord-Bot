const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    message.delete()

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.author.send("You cannot use that command.")
    if (!args[0]) return message.member.send("You haven't supplied any message to announce.")
    let highestRole = message.member.highestRole

    let deliminator = args.join(" ").split("\"") // title will embedded in quotes
    if (!args.join(" ").includes("\"")) { // if there isn't a title set using "title"
        let body = args.join(" ")
        const embed = new Discord.RichEmbed()
        .setAuthor(`Announcement from ${message.member.user.username}`, message.author.avatarURL)
        .setDescription(body)
        .setColor(highestRole.color)
        .setFooter(highestRole.name)
        .setTimestamp()

        try { message.channel.send(embed) } catch(err) { console.log(err) }
        message.author.send(`You sent an announcement without setting a title. To set a title embed the title within quotes. For example:\n${prefix}announce "Title" The other important stuff...`)
    } else { // if there is a title set using "title"
        let title = deliminator[1].replace("\"", "")
        let body = args.join(" ").replace(`"${title}"`, "") // replace the title with an empty string...
        const embed = new Discord.RichEmbed()
        .setAuthor(`Announcement from ${message.member.user.username}`, message.author.avatarURL)
        .setTitle(title.replace("\"", ""))
        .setDescription(body)
        .setColor(highestRole.color)
        .setFooter(highestRole.name)
        .setTimestamp()

        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "announce",
    active: true
}
