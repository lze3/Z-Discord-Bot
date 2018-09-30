const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async(bot, message, args) => {
    // if(!message.member.hasPermission('MANAGE_MEMBERS')) return message.reply('You do not have permission to use that command.');

    // let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    // if(!rMember) return message.reply('I couldn\'t find that user.')

    // // let role = args.join(" ").slice(22);
    // // if(!role) return message.reply(`${message.author}, '${config.prefix}role department'. You didn't specify a department. \nDepartments: \n- LSSD\n-SAHP\nSAFD`)

    let gRole = message.guild.roles.find(`name`, 'Staff');
    // if(!gRole) return message.reply('Invalid department.');

    // if(rMember.roles.has(gRole.id)) return message.reply('That user is already in that department.')

    if(args[0] === "test") {
        // await(rMember.addRole(gRole.id)) // Los Santos Sheriff's Department
        message.channel.send(gRole.id)
        
    }else {
        message.channel.send('This will get sent if you haven\'t provided any arguments.')
    }


}

module.exports.help = {
    name: 'dept'
}