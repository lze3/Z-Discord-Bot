const Discord = require('discord.js')
const client = new Discord.Client({disableEveryone: true});
const botconfig = require('../../botconfig.json')

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");

    resetBot(message.channel)
}

function resetBot(channel) {
    channel.send('Restarting bot...')
    .then(message => client.destroy())
    .then(() => client.login(botconfig.token) )
}

module.exports.help = {
    name: 'botrestart'
}