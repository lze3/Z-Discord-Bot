const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if(!message.member.roles.has('481541340337930269') || !message.member.roles.has('501076418399043604')) return;

    let embed = new Discord.RichEmbed()
    .setAuthor("Channel Intent", 'https://i.imgur.com/WbVImVf.png')
    .setDescription(`This channel is for requesting voice channels for your civilian operation. Please use the following format: 
    
    \`\`\`
    Organisation name:
    Channel name:
    Channel purpose:
    Proof of ownership:
    \`\`\`
    For 'proof of ownership' you can just provide a screenshot of you having the owner role for that organisation in the civilian operations Discord.
    `)
    .setFooter("Head of Civilian Operations", "https://i.imgur.com/ODI3OLT.png")
    .setTimestamp()
}

module.exports.help = {
    name: 'co_chan'
}