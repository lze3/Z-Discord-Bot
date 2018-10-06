const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("Ohhh, having some trouble there buddy, I think you should learn to ask a moderator first.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
    name: "clear"
}