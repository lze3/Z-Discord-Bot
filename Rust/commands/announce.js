const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let annRole = message.guild.roles.find('name', 'JCRP - Community Director')/* || message.guild.roles.find('name', 'Rust Owner')*/
    let retChannel = message.guild.channels.find('name', 'bot-stuff')
    if(!message.member.roles.has(annRole.id)) return 
        try { 
            await message.author.send("You do not have permission for that command.")
        } catch(e) {
            console.log("We tried DMing user [ " + message.author.username + "#" + message.author.discriminator + " ] but their DMs are disabled.")
            retChannel.send(`${message.author}, we tried DMing you but you have your DMs disabled.\nYou do not have permission for that command.`)
        }
    if(message.channel.id !== '517467884998623232' || message.channel.id !== '517686263017373697') return 
        try {
            await message.author.send("You can only use this command in the <#517467884998623232> channel.")
        } catch(e) {
            console.log("We tried DMing user [ " + message.author.username + "#" + message.author.discriminator + " ] but their DMs are disabled.")
            retChannel.send(`${message.author}, we tried DMing you but you have your DMs disabled.\nYou can only use that command in <#517467884998623232>.`)
        }
    if(!args[0]) return 
        try {
            await message.author.send("You haven't provided any arguments.")
        } catch(e) {
            console.log("We tried DMing user [ " + message.author.username + "#" + message.author.discriminator + " ] but their DMs are disabled.")
            retChannel.send(`${message.author}, we tried DMing you but you have your DMs disabled.\nYou didn't provide any arguments for that command.`)
        }

    let embed = new Discord.RichEmbed()
    .setAuthor("Server Announcement from " + message.author.username, message.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter("JCRP Rust", "https://i.imgur.com/9zOoMMU.png")
}

module.exports.help = {
    name: 'announce'
}