
const Discord = require('discord.js')
const config = require('../botconfig.json')

module.exports.run = async(bot, message, args) => {
    let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    let user_s = message.author // sender
    message.delete().catch(O_o => {})
    if(!(message.member.roles.has('455237281402585089') /* Staff role */ || message.member.roles.has('354074444265947147') /* SAHP - FTO role*/ || message.member.roles.has('481541340337930269') /* Director */)) // Checking if user has the 'LSPD - FTO', 'Staff' or 'Director' role
    {
        let cb_channel = message.guild.channels.find('name', 'jcrp-staff')
        cb_channel.send('User ' + message.author + ' tried executing a command they do not have permission to use. Command: [ `' + config.prefix + module.exports.help.name + '` ]')
        message.channel.send('You don\'t have permission to use that command. (' + config.prefix + 'sahp)')
    }

    else 
    {
        if (!user_t)
        {
            message.channel.send("I couldn't find that user.")
        } 
        else
        {
            if(user_s.id === user_t.id)
            {
                message.channel.send(user_s + " you can't give roles to yourself.")
            }
            else
            {
                if(user_t.roles.has('367796502824878080')) 
                {
                    message.channel.send('That user already has those roles.')
                }
                else
                if(user_t.roles.has('354074453270986752')) // Train Me (SAHP)
                {
                    message.channel.send(user_t + " has been given San Andreas Highway Patrol roles by user [ " + user_s + " ]. Welcome!")
                    user_t.addRole('367796502824878080') // San Andreas Highway Patrol
                    user_t.addRole('354067549970890767') // SAHP - Cadet
                    user_t.addRole('354095488666042380') // Law Enforcement 
                    user_t.addRole('354095512225316876') // First Responders

                    user_t.removeRole('354074453270986752') // Train Me (SAHP)
                    user_t.removeRole('354074696515584000') // Train Me

                    if (user_t.roles.has('354074696322514950')) // Interview Me (Application Accepted)
                    {
                        user_t.removeRole('354074696322514950') // Interview Me (Application Accepted)
                    }
            }
            else
                message.channel.send(user_t + ' does not have the `Train Me (LSPD)` role, therefore, they are not allowed to be given the department roles.')
        }
    }
}
}

module.exports.help = {
    name: 'lspd'
}