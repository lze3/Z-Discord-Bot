const atob = require('atob')

module.exports.run = async(bot, message, args) => {
    if(args[0]) {
        message.delete().catch(O_o => {});
        let EncodedMessage = args.join(" ")
        if(message.author.id !== "264662751404621825" || message.author.id !== "357842475328733186") return;
        message.channel.send(atob(EncodedMessage))
    }
    else message.channel.send("No args provided.").then(msg => msg.delete(2500))
}

module.exports.help = {
    name: 'decode'
}