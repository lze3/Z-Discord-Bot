const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send(" Haha, what a name, maybe try a real one?");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Your joking right? Have fun NOT kicking <:megalul:451674383333982208>");
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("Hmmmm. Should I still be trusting you? <:thonkDong:451674850684174337>");

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#fc4b4b")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);

        let kickChannel = message.guild.channels.find(`name`, "mod-chat");
        if(!kickChannel) return message.channel.send("Can't find channel.");

        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
}