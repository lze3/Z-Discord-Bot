const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args.join(" ")) // target
    let reason = args.join(" ").split(15)
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you do not have permission for that command.")
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I do not have the `KICK_MEMBERS` permission, therefore I cannot kick this user.")
    if (!user) return message.reply("I could not find that user.")
    if (user.hasPermission("KICK_MEMBERS")) return message.reply("I cannot kick that user.")

    if (args[0])
        reason = "No reason provided."

    try {
        let kickchannel = message.guild.channels.find("name", "jcrp-mod_logs")
        const embed = new Discord.RichEmbed()
        .setAuthor("Action | Kick | " + user.username + "#" + user.discriminator, user.avatarURL)
        // .setDescription
        
        user.kick(reason)
        kickchannel.send(embed)
    } catch(err) {
        console.log(err)
    }

}

module.exports.help = {
    name: "kick"
}