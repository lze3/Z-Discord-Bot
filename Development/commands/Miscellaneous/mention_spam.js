module.exports.run = async(bot, message, args) => {
    if (!args[0]) return;
    if (message.author.id !== "264662751404621825") return;

    sendThenDelete(message.channel, args.join(" "))

}

function sendThenDelete(channel, message) 
{
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
    channel.send(message).then(msg => msg.delete(200))
}

module.exports.help = {
    name: "ldel"
}