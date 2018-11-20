
module.exports.run = async(bot, message, args) => {
    let ip = '149.56.241.128'
    if (args[0] === 's1')
    {
        message.channel.send('The IP for S1 (Server 1) is **' + ip + ':30123**')
    }
    else
    if (args[0] === 's2')
    {
        message.channel.send('The IP for S2 (Server 2) is **' + ip + ':30124**')
    }
    else
    if (args[0] === 'training')
    {
        message.channel.send('The IP for the training server will be given to your by your FTO. This will not be publicly posted.')
    }
    else
    if (args[0] === 'dv')
    {
        message.channel.send('The IP for the development server will only be given to you by a member of The Directorate or Chief of Development.')
    }
    else
        message.channel.send('__**Server IPs:**__\nServer 1 - **' + ip + ':30123**\nServer 2 - **' + ip + ':30124**\nTraining - *Ask your FTO!*\nDevelopment - *Private*')
}

module.exports.help = {
    name: 'ip'
}