const Discord = require("discord.js")

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async (Client, message, args) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you do not have permission to use that command.")
	if (!args[0]) return message.reply("you need to give me a number of messages to delete.")
	if (isNaN(args[0]) || args[0].toString() == "0") return message.reply(`${args[0].toString() == "0" ? "I deleted 0 messages for you." : "that is not a valid number."}`)
	amount = (args[0] * 1) + 1
	try {
		message.channel.bulkDelete(amount)
		message.channel.send(`${message.author}, I deleted ${amount - 1} message${args[0] == 1 ? "" : "s"} for you.`).then(msg => msg.delete(5000))
	} catch(err) {
		message.channel.send(`${message.author}, some messages were too old, I couldn't delete them.`)
	}
}

module.exports.help = {
	name: "purge"
}