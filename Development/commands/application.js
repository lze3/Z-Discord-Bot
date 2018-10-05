const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    
    let LSSDFTO = message.guild.roles.find('name', 'LSSD - FTO')
    let SAHPFTO = message.guild.roles.find('name', 'SAHP - FTO')
    let DIRECTOR = message.guild.roles.find('name', 'The Directorate')
    let when = args.join(' ')

    if(!(when === '')) {
        message.channel.send('-new--command duration')
        
        if(message.member.roles.find('name', 'The Directorate')) {

            let intEmbed = new Discord.RichEmbed()
            .setTitle('New Interview Time!')
            .addField('When?', when)
            .addField('Field Training Officer', `${message.author}`)
            .addField('Any Questions or Concerns?', `Message the Field Training Officer (${message.author})`)
            .setColor('#FFD894')

            message.delete().catch(O_o=>{});

            message.channel.send(intEmbed)

        } else
        message.channel.send('You do not have permission to use this command.')
    } else
    message.channel.send('Incorrect usage.')
}

module.exports.help = {
    name: 'new--command'
}