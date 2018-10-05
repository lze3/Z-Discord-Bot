const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();

        let user;
        // If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        // Define the member of a guild.
        const member = message.guild.member(user);
        
        //Discord rich embed
        const UserInfoEmbed = new Discord.RichEmbed()
            .setColor('#C2F1FF')
            .setTitle(`${message.author}`)

        message.channel.send(UserInfoEmbed);  
}

module.exports.help = {
    name: "userinfo"
}