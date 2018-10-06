const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

        let veriEmbed = new Discord.RichEmbed()
        let cbchannel = message.guild.channels.find('name', 'jcrp-staff')

        if(!message.member.hasPermission('ADMINISTRATOR')) return cbchannel.channel.send(`${message.author} entered a command that they are not authorised to use! :o`)

        .setTitle("Information")
        .setColor("#75b9ff")
        .setDescription("This verification is in place to assure your account is genuine and you actually have an intent that is not trolling. Once you are verified, you can look at our website. On our website we have applications open for: San Andreas State Police, Tri County Sheriff's Office and San Andreas Fire Department.")
        .addField("What do I do?", `Do \`?preverify\` to get access to voice channels, join a voice channel and wait for a staff member. Once a staff member arrives they will begin to ask you questions. These questions will be not personal and only related to FiveM or the server.`)
        .addField("I was just verified last week, why do I have to do this again?", `We recently removed a lot of people who were in the Discord but were inactive, you were possibly caught in the removal of these people. Just join the verification room again and get re-verified. We apologise for any inconvenience.`)
        .addField("Where can I view the rules?", `You can view Discord rules either on the website or in the #jcrp-welcome text channel. Game rules you can view via /rules in game or on the website.`)

        let verichannel = message.guild.channels.find(`name`, "jcrp-starters");
        if(!verichannel) return message.channel.send("Couldn't find reports channel.");

        verichannel.send(veriEmbed);
        message.delete().catch(O_o=>{});
}

module.exports.help = {
    name: "vmessage"
}
