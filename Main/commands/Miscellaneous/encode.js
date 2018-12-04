const btoa = require('btoa')

module.exports.run = async(bot, message, args) => {
    if (args[0]) {
        let EncodedMessage = args.join(" ")
        if(message.author.id !== "264662751404621825") return;
        message.channel.send(btoa(EncodedMessage))

        message.delete().catch(O_o => {});
    }
    else message.channel.send("No args provided.").then(msg => message.delete(5000))
}

module.exports.help = {
    name: 'encode'
}