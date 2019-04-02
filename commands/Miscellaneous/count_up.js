let enabled = false

module.exports.run = async(Client, message, args) => {
    let no = args[1]
    CountUp()
}

module.exports.help = {
    name: 'count_up'
}

function CountUp(number) 
{
    while (enabled)
    {
        let chan = message.guild.channels.find("id", "493289080654790656")
        chan.send(number + 1)
    } 
    setTimeout(CountUp, 100);

}


