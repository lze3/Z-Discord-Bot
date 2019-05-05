Client.on("message", async message => {
    if(message.author.bot) return; // ignore bots

    if(message.channel.type === "dm") return; // ignore dms

	// if (!message.member.hasPermission("MANAGE_GUILD")) return;
    const messageArray = message.content.split(" ");
    const cmd = messageArray[0];
    const args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let commandfile = Client.commands.get(cmd.slice(prefix.length));
    if (commandfile) {
        let embed = new Discord.RichEmbed()
        .setColor("#117EA6")
        .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
        .setDescription(`Used \`${cmd.slice(1)}\` in <#${message.channel.id}>\n${cmd} ${args.join(" ")}`)
        .setTimestamp()

        commandfile.run(Client, message, args);
        message.guild.channels.get("554365078401449990").send(embed)
    } 

});