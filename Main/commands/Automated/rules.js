const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    if (!(message.member.roles.has('481541340337930269'))) 
    {
        message.channel.send("This command is in development. You should not be using this.")
    }
    else
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("JusticeCommunityRP • Important Server Information - Rules", 'https://a.pomf.su/oasYg.png')
        .addField("Server Motto", "Family, Friends and Fun!")
        .setDescription("**1.** Do not tag owners or a group of members unless you have a valid reason to do so. If you seek assistance, please tag the `Junior Administrator` role.\n\n**2.** Staff word is final, do not argue with them in the chats and try to loophole the consequence.\n\n**3.** No NSFW content, including links or pics of violence, gore, hate crimes, racism, sexist or just unwholesome stuff.\n\n**4.** Please use channels for their respective purpose. For example, use <#452156710983827456> for bot commands.\n\n**5.** Do not scream or make obnoxious noises in voice channels especially when there is a staff member in there, you can potentially be muted or receive a strike.\n\n**6.** Do not impersonate people.\n\n**7.** Do not leak DMs.\n\n**8.** Do not spam connect and disconnect in voice channels.\n\n**9.** Read text channel descriptions and make sure your message is appropriate for the channel.\n\n**10.** Posting links in <#372942940550463488> is forbidden, post them in <#372943832876056576>.\n\n**11.** If you are not a Registered Streamer, do not advertise.\n\n**12.** Refrain from using shortened URLs, they have the potential to be very dangerous.\n\n**13.** Threats of suicide and self-harm are not allowed and you may face a strike if you do make a threat.\n\n**14.** Do not constantly beg for attention from the Directorate, they are busy people. They do not need people badgering them when they have more important things to do.\n\n**15.** Do not ask people with special roles how to get them. Roles like 'Staff' are given to people who are trusted by Lead Administrator+.\n\n**16.** Bomb threats or death threats or anything related to harm are not allowed and will result in an immidiate ban or strike. \n\n**17.** Do not mass mention any roles if you do not have a valid reason to do so.\n\n**18.** The only 'Freedom of Speech' that is allowed is POSITIVE FREEDOM OF SPEECH.\n\n**19.** Most of all, be respectful to all members of the community.\n\n**20.** Do not have a negative attitude.")
        .setColor('#9ae7ff')

        let embed_continuted = new Discord.RichEmbed()
        .setAuthor("JusticeCommunity RP • Important Server Information - Roles", 'https://a.pomf.su/oasYg.png')
        .setDescription("`The Directorate` - This roles consists of Directors of the server. (Aaron, Jack and Soccer)\n\n`Internal Administrator` - Administrators of vital tools of the community. (m9Networks - Server and website provider)\n\n`Lead Administrator` - Head of Administration (Taylor and Joe)\n\n`Staff` - The staff of the server, people who are trusted and help keep the server under control.\n\n`Chief of Development` - In charge of who becomes a developer very busy when it comes to development (Jack)\n\n`Developer` - Developers of the game server and Discord bot.\n\n`Los Santos Sheriff's Department` - The department that patrols all around the counties, both Los Santos County and Blaine County.\n\n`Los Santos Police Department` - The department that patrols in towns and cities of San Andreas.\n\n`San Andreas Highway Patrol` - The department that patrols on highways and main roads.\n\n`San Andreas Fire Department` - Responsible for responding to calls that contain citizens being injured.\n\n`Train Me` - The 'waiting for training' role.\n\n`Interview Me (Application Accepted)` - The 'waiting for interview' role.\n\n`VIP (Donator)` - Kind members who have decided to give the server some money.")
        .setColor('#9ae7ff')
        .setTimestamp()

        message.channel.send(embed)
        message.channel.send(embed_continuted)
    }
    message.delete().catch(O_o => {})
}

module.exports.help = {
    name: 'rules'
}