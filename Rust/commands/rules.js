const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let pRole = message.guild.roles.find('name', 'JCRP - Community Director')
    if(!message.member.roles.has(pRole.id)) return message.reply("you do not have permission to use that command.")

    let embed = new Discord.RichEmbed()
    .setAuthor("JCRP - Rust • Important Server Information - Rules", "https://i.imgur.com/9zOoMMU.png")
    .setDescription(
        `**1.** Do not tag owners or a group of members unless you have a valid reason to do so. If you seek assistance, please tag the \`Staff\` role

        **2.** Staff word is final, do not argue with them in the chats and try to loophole the consequence.

        **3.** No NSFW content, including links or pics of violence, gore, hate crimes, racism, sexist or just unwholesome stuff.

        **4.** Please use channels for their respective purpose.

        **5.** Do not scream or make obnoxious noises in voice channels especially when there is a staff member in there, you can potentially be muted or receive a strike.

        **6.** Do not impersonate people.

        **7.** Do not leak DMs.

        **8.** Do not spam connect and disconnect in voice channels.

        **9.** Read text channel descriptions and make sure your message is appropriate for the channel.

        **10.** Posting links in #general is forbidden, post them in #off-topic.

        **11.** If you are not a Registered Streamer or Youtuber, do not advertise.

        **12.** Refrain from using shortened URLs, they have the potential to be very dangerous.

        **13.** Threats of suicide and self-harm are not allowed and you may face a strike if you do make a threat.

        **14.** Do not constantly beg for attention from the Directorate, they are busy people. They do not need people badgering them when they have more important things to do.

        **15.** Do not ask people with special roles how to get them. Roles like 'Staff' are given to people who are trusted by Lead Administrator+.

        **16.** Bomb threats or death threats or anything related to harm are not allowed and will result in an immediate ban or strike. 

        **17.** Do not mass mention any roles if you do not have a valid reason to do so.

        **18.** The only 'Freedom of Speech' that is allowed is POSITIVE FREEDOM OF SPEECH.

        **19.** Most of all, be respecful to all members of the community.

        **20.** Do not have a negative attitude.
    `)
    .setColor("#CE422A")

    console.log(message.author.username + " posted rules in channel: #" + message.channel.name)
    message.channel.send(embed)

}

module.exports.help = {
    name: 'rules'
}