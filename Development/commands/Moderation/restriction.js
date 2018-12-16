const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let typ           = args[1]
    let gMember       = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args.join(" ")) // target
    let logChannel    = message.guild.channels.find("name", "jcrp-staff")
    let embedRestRole = message.guild.roles.find('name', "Embed restriction")
    let emojiRestRole = message.guild.roles.find('name', "Emoji restriction")
    let reactRestRole = message.guild.roles.find('name', "Reaction restriction")
    var type          = "Not specified."

    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("you do not have permission for that command.")
    if (!gMember) return message.reply("I could not find that user.")
    if (!args[1]) return message.reply("you must state what restriction to place on the user.")
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I do not have the `MANAGE_ROLES` permission, therefore I cannot perform that action.")
    if (!(typ === "embed" || typ === "embeds" || typ === "emoji" || typ === "emojis" || typ === "react" || typ === "reactions")) return message.reply("invalid type.")

    if (typ === "embed" || typ === "embeds")
    {

        type = "Embed"
        colour = 16776960

        gMember.addRole(embedRestRole.id)

    } else if (typ === "emoji" || typ === "emojis") 
    {

        type = "Emoji"
        colour = 16776960

        gMember.addRole(emojiRestRole.id)

    } else if (typ === "react" || typ === "reactions") 
    {

        type = "React"
        colour = 16776960

        gMember.addRole(reactRestRole.id)
    }
    
    const embed = new Discord.RichEmbed()
    .setAuthor("Restriction | " + gMember.user.username + "#" + gMember.user.discriminator, gMember.user.avatarURL)
    .setColor(colour)
    message.channel.send(embed)

    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'restrict'
}