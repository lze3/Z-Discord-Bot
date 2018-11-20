module.exports.run = async(bot, message, args) => 
{
    if(!(message.member.roles.has('481541340337930269') || message.guild.name === "JusticeCommunityRP - Development"))
    {
        message.channel.send("You are not allowed to use that command.")
    }
    else
    {
        message.channel.send("Bot restarted, " + message.author).then(() => {
            process.exit(1);
        })
    }
}

module.exports.help = {
    name: 'restart'
}