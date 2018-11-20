
const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async(bot, message, args) => {
    if(!(message.member.roles.has('455237281402585089') /* Staff role */ || message.member.roles.has('354093626592329739') /* LEO or Fire Supervisor/FTO role */ || message.member.roles.has('484129797195300868') /* Chief of Development role */)) // Checking if user has the 'LSPD - FTO' role or the 'Staff' role
    {
       message.channel.send('You don\'t have permission to use that command. (' + config.prefix + 'ridealong)')
    }

    else 
    {
        let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
        if (!user_t)
        {
            message.channel.send('User not found.')
        } 
        else
        {
            if(user_t.roles.has('367796502824878080'))
            {
                message.channel.send('That user already has those roles.')
            }
            else
            {
                message.channel.send(user_t + ' has been given San Andreas Highway Patrol roles by user ' + user_s +'. Welcome!')
                user_t.addRole('367796502824878080') // San Andreas Highway Patrol
                user_t.addRole('354067549970890767') // SAHP - Cadet
                user_t.addRole('354095488666042380') // Law Enforcement 
                user_t.addRole('354095512225316876') // First Responders
            }
        }
    }
}

module.exports.help = {
    name: 'ridealong'
}