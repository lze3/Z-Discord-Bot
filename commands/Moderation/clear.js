const Discord = require("discord.js")

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async (bot, message, args) => {
	if (message.member.roles.has('481541340337930269'))
	{
		if (args[0])
		{
            try {
                await message.channel.bulkDelete(args[0])
            } catch(error) {
                message.channel.send(message.author + ", those messages are too old.")
            }

		}
		else
		{
			message.channel.send(message.author + ", improper usage. `" + prefix + module.exports.help.name + " number`")
		}
	}
	else
	{
		message.channel.send(message.author + ", you do not have permission to use that command.")
		console.log(message.author.username + " entered a command that they do not have permission for [ " + module.exports.help.name + " ].")
	}
}

module.exports.help = {
	name: "purge"
}