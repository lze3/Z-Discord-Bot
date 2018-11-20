module.exports.run = async(bot, message, args) => {
    let user_t = message.mentions[1] // target
    let user_s = message.author // sender
    if (args[0] === "lspd")
    {
        message.channel.send("<@!" + user_t.id + "> has been given 'Train Me' and 'Interview Me (Application Accepted)' roles for LSPD.")
    }
}

module.exports.help = {
    name: "appacc"
}