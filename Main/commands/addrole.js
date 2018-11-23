const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	let role_c = args.join(" ").slice(22)
	let role_s = message.guild.roles.find('name', role_c)
	if(user_t)
	{
		if(role_s)
		{
			if(!user_t.roles.has(role_s.id))
			{
				message.channel.send(user_t + " has been given the " + role_c + " role.")

				try
				{
					user_t.send("You have been given the " + role_c + " role.")
				}
				catch(e)
				{
					console.log(e.stack)
					message.channel.send(user_t + " has been given the " + role_c + " role. We couldn't DM you as your DMs are disabled.")
				}
			}
			else
			{
				message.channel.send(message.author + ", that user already has that role.")
			}

		}
		else
		{
			message.channel.send(message.author + ", I could not find that role.")
		}
	}
	else
	{
		message.channel.send(message.author + ", I could not find that user.")
	}
}

module.exports.help = {
	name: "addrole"
}