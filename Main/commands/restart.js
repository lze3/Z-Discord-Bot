const Discord = require('discord.js')
const config = require('../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => 
{
    if(!(message.member.roles.has('481541340337930269') || message.guild.name === "JusticeCommunityRP - Development")) return;

    reboot(message.channel)
}

module.exports.help = {
    name: 'restart'
}