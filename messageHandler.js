Client.on("message", async message => {
    if(message.author.bot) return; // ignore bots

    if(message.channel.type === "dm") return; // ignore dms

    const messageArray = message.content.split(" "); // turn args into an array
    const cmd = messageArray[0]; // this is the command
    const args = messageArray.slice(1); // this is args minus the prefix and the command

    if (!message.content.startsWith(prefix)) return; // if args doesn't start with the prefix, do nothing
    
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