module.exports.run = async(bot, message, args) => {
    let applicant = message.mentions.users.first()
    if(!(message.member.roles.has('481541340337930269')))
    {
        message.channel.send("You do not have permission to use that command.")
    }
    else
    if(!applicant)
    {
        message.channel.send("Could not find user.")
    }
    else
    {
        if(args[1] === 'sahp')
        {
            message.channel.send(applicant + "'s application for the San Andreas Highway Patrol has been accepted!")
        }
        else
        {
            message.channel.send(message.author + " `;" + module.exports.help.name + " user dept`")
        }
    }
}

module.exports.help = {
    name: 'appacc'
}