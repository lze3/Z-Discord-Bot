let sticky = 
{
    id     : "",
    state  : false,
    message: "",
    msgId  : "",
    lastId : ""
}

module.exports.run = async(Client, message, args) => { 
    if (args[0] === "set") {
        if (args[1] === undefined || args[1].length < 0) return;
        sticky = {
            id     : message.channel.id,
            state  : true,
            message: ":warning: __**Important Message!**__ :warning:\n" + args.join(" ").slice(args[0].length),
            msgId  : "",
            lastId : ""
        }
    } else if (args[0] === "remove") {
        sticky.state = !sticky.state
        console.log(sticky.state)
    }

    message.channel.send(sticky.message).then(msg => {
        sticky.msgId = msg.id
    })

    Client.on("message", async message => {
        if (message.author.bot) return
        if (sticky.state) {
            if (message.channel.id === sticky.id) {
                message.channel.fetchMessage(sticky.msgId).then(msg => {
                    msg.delete()
                })
                setTimeout(() => {}, 10000);
                message.channel.send(sticky.message).then(msg => {
                    sticky.msgId = msg.id
                })
            }
        }
    })
}

module.exports.help = { 
    name: "sticky",
    active: true
}