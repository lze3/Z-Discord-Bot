const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(" Haha, what a name, maybe try a real one?");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeah Right, nice try bub.");
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Haha, your cute, thanks for trying to touch me though.");

        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff470f")
        .addField("User", `${bUser} with ID ${bUser.id}`)
        .addField("Staff member", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Channel command was entered", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);

        let banChannel = message.guild.channels.find(`name`, "jcrp-new_bot-test");
        if(!banChannel) return message.channel.send("Can't find channel.");


        message.guild.member(bUser).ban(bReason);
        banChannel.send(banEmbed)
}

module.exports.help = {
    name: "ban"
}