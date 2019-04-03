module.exports.run = async(Client, message, args) => {
    message.delete()
    if (args[0] === "support" || message.channel.name.includes("support")) 
    {
        message.channel.send(
        `:warning: __**Support Template**__ :warning:
        
What is your issue?
When does the issue occur?
Have you installed it correctly?
Have you read the correct documentation in order to install any dependencies, if applicable?`
        )
    }
    else 
    {
        message.author.send("Could not find template to use.")
    }
}

module.exports.help = {
    name: 'template'
}