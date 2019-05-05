const Discord = require("discord.js")

module.exports.run = async (Client, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  
    let actmessage = args.join(" ");
  
    message.channel.send(actmessage);
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: "say",
    active: true
}