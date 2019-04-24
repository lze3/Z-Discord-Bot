module.exports.run = async(Client, message, args) => {  
    if (!message.member.hasPermission("MANAGE_CHANNEL")) { message.reply("you do not have permission to use that command."); return }
    if (args.length < 3) { message.reply("you haven't supplied sufficient arguments."); return }
    if (args[0] === 'set') {
        if (args[1] === 'topic') {
            let topic = args.join(" ").slice(args[0].length+args[1].length+1)
            await message.channel.setTopic(topic, `${message.member.user.username} told me to.`);
            message.channel.send(`${message.author}, I just set the channel topic to \n\`${message.channel.topic}\``)
        }
        else if (args[1] === 'name') {
            let name = args[2]
            await message.channel.setName(name, `${message.member.user.username} told me to.`);
            message.channel.send(`${message.author}, I just set the channel name to \n\`${message.channel.name}\``)
        }
        else if (args[1] === 'parent') {
            let parent = args[2]
            message.channel.setParent(parent, `${message.member.user.username} told me to.`).catch(err => { message.channel.send(err.toString()); return })
            message.channel.send(`${message.author}, I just set the channel parent to \n\`${message.channel.parent.name}\``)
        }
    }
    
}

module.exports.help = {
    name: 'channel'
}