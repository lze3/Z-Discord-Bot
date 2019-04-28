const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    let deliminator = args.join(" ").split("\"") // title will embedded in quotes

    if (!args.join(" ").includes("\"")) { // if there isn't a title set using "title"
        let body = args.join(" ")
        const embed = new Discord.RichEmbed()
        .setAuthor(`Announcement from ${message.member.user.username}`, message.author.avatarURL)
        .setDescription(body)
        .setColor("#F1383A")
        .setTimestamp()

        message.channel.send(embed)
    } else { // if there is a title set using "title"
        let title = deliminator[1].replace("\"", "")
        let body = args.join(" ").replace(`"${title}"`, "") // replace the title with an empty string...
        const embed = new Discord.RichEmbed()
        .setAuthor(`Announcement from ${message.member.user.username}`, message.author.avatarURL)
        .setTitle(title.replace("\"", ""))
        .setDescription(body)
        .setColor("#F1383A")
        .setTimestamp()

        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "announce"
}