const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    message.delete();
    let question = args.slice(0).join(" ");

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
    if (args.length === 0)
    return message.reply('**Invalid Format:** `;Poll <Question>`')

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username + '#' + message.author.discriminator + ' has started a poll.', message.author.avatarURL)
    .setColor("#5599ff")
    .setDescription(`${question}`)
  
    message.channel.send({embed}).then( (message) => {
        message.react('👍')
        .then(() => message.react('👎'))
    });

}

module.exports.help = {
    name: "poll",
    active: true
}