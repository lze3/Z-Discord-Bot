const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	let role_c = args.join(" ").slice(22)
	let role_s = message.guild.roles.find('name', role_c)
	if(message.member.roles.find('name', "Director") || message.guild.name === 'JusticeCommunityRP - Development')
	{
		if(user_t)
		{
			if(role_s)
			{
				if(!user_t.roles.has(role_s.id))
				{
					message.channel.send(user_t + " has been given the `" + role_c + "` role.")
					await(user_t.addRole(role_s.id))

					try
					{
						await user_t.send("You have been given the `" + role_c + "` role.")
					}
					catch(e)
					{
						console.error("Tried DMing user [ " + user_t.username + " ]. Failed because user's DMs are disabled.")
						message.channel.send("Tried DMing user **" + user_t.nickname + "**. Failed as the user's DMs are disabled.")
					}
				}
				else
				{
					message.channel.send(user_t + " has been removed from the `" + role_c + "` role.")
					await(user_t.removeRole(role_s.id))

					try
					{
						await user_t.send("You have been removed from the `" + role_c + "` role.")
					}
					catch(e)
					{
						console.error("Tried DMing user [ " + user_t.username + " ]. Failed because user's DMs are disabled.")
						message.channel.send("Tried DMing user **" + user_t.nickname + "**. Failed as the user's DMs are disabled.")
					}
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
	else
	{
		message.channel.send(message.author + ", you do not have permission to use that command.")
	}
}

module.exports.help = {
	name: "addrole"
}