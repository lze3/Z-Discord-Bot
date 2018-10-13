const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(" Haha, what a name, maybe try a real one?");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeah Right, nice try bub.");
        // if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Haha, your cute, thanks for trying to touch me though.");
        if (bReason === '') {
            bReason = 'No reason provided.'
        } else {
            bReason = args.join(" ").slice(22);
        }

        message.channel.send('<:GTick:492023314244698132> ' + bUser + '** has just been banned! Reason: __' + bReason + '__**')
        message.guild.member(bUser).ban(bReason);
}

module.exports.help = {
    name: "ban"
}