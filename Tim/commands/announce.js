const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    // let topic = args[0]
    let announcment = args.join(" ");
        let announceEmbed = new Discord.RichEmbed()
        // if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permission for that command. (announce)")


        // let messageArray = message.content.split(" ");
        // let topic = messageArray(`topic:`);
        // let main = messageArray(` | `);


        .setTitle(`${date12}`)
        .setAuthor(`Announcement from ${message.author.username}`, `${message.author.avatarURL}`)
        .setColor("#75b9ff")
        .setDescription(`${announcment}`)

        let announcechannel = message.guild.channels.find(`name`, "jcrp-logs");
        if(!announcechannel) return message.channel.send("Couldn't find reports channel.");

        announcechannel.send(announceEmbed);
        message.delete().catch(O_o=>{});
}

module.exports.help = {
    name: "announce"
}
