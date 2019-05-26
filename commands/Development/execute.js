const Discord = require('discord.js')

module.exports.run = async(Client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) { return message.reply('you cannot use that command.').then(() => console.log(`${message.author} tried executing .exec`))}
    if(!args[0]) return;
    try {
        let code_delim = args.join(" ").split("\`\`\`")
        code = code_delim[1].replace("js", "")
        console.log(`
            code_delim -> ${typeof(code_delim)} | ${typeof(code_delim) == 'object' ? code_delim[1] : code_delim}
            code -> ${typeof(code)} | ${code}`
        )
        eval(code)
    } catch(err) {
        const errembed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`\`${err.toString()}\``)
        .setColor('#F46E3F')

        message.channel.send(errembed)
    }
}

module.exports.help = {
    name: 'exec',
    active: true
}