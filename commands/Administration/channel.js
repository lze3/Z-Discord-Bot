const Discord = require('discord.js')
const moment = require('moment')

module.exports.run = async(Client, message, args) => {  
    let canExecuteMngCmds = true;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) { canExecuteMngCmds = false }
    if (args.length < 1) { message.reply("you haven't supplied sufficient arguments."); return }
    if (args[0] === 'set') {
        if (!canExecuteMngCmds) { message.channel.send(`${message.author}, you are not allowed to use that command.`); return }
        if (args[1] === 'topic') {
            let topic = args.join(" ").slice(args[0].length+args[1].length+1)
            await message.channel.setTopic(topic, `${message.member.user.username} told me to.`);
            message.channel.send(`${message.author}, I just set the channel topic to \n\`${message.channel.topic}\``).then(msg => msg.delete(20000))
        }
        else if (args[1] === 'name') {
            let name = args[2]
            await message.channel.setName(name, `${message.member.user.username} told me to.`);
            message.channel.send(`${message.author}, I just set the channel name to \n\`${message.channel.name}\``).then(msg => msg.delete(20000))
        }
        else if (args[1] === 'parent') {
            let parent = args[2]
            await message.channel.setParent(parent, `${message.member.user.username} told me to.`).catch(err => { message.channel.send(err.toString()); return })
            message.channel.send(`${message.author}, I just set the channel parent to \n\`${message.channel.parent.name}\``).then(msg => msg.delete(20000))
        }
        message.delete()
    } else if (args[0] === 'info') {
        if (!args[1]) 
            channel = message.channel
        else
            channel = message.guild.channels.find(channel => channel.id === args[1]) || message.guild.channels.find(channel => channel.name === args[1])

        if(!channel || channel === undefined || channel === null) return message.reply("I couldn't find that channel.")
            let topic = channel.topic ? channel.topic : "None"
            let type = channel.type
            let nsfw = channel.nsfw
            let id = channel.id
            let name = channel.name
            let size = channel.members.size
            let created = moment.utc(channel.createdAt).format("MM/DD/YYYY hh:mm:ss");

            if (type === 'voice')
                nsfw = "N/A"
            
            if (type === 'text')
                size = "N/A"
            

            let chanInfo = new Discord.RichEmbed()
            .setDescription(`Info about **${name}** (ID: ${id})`)
            .addField("❯ Info", `• Type: ${type}\n• Topic: ${topic}\n• NSFW: ${nsfw}\n• Creation Date: ${created}\n• Size: ${size}`)
            .setColor('#3498DB')
            .setThumbnail('https://w.wew.wtf/impcab.png')

            message.channel.send(chanInfo).then(msg => msg.delete(20000))
    } else if (args[0] === "create") {
        let channelName = args[1] !== undefined ? args[1] : "placeholder"
        message.guild.createChannel(channelName, "text")
    }
    
}

module.exports.help = {
    name: 'channel',
    active: true
}