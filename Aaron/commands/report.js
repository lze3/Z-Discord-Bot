const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let text = args[1]
        if(!rUser) return message.channel.send("<:RTick:452668819832569867> I can't find that user. ");
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Player Report")
        .setColor("#ffb5b5")
        .addField("Reported user", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported by", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", reason);

       let reportschannel = message.guild.channels.find(`name`, "jcrp-reports");
       if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}