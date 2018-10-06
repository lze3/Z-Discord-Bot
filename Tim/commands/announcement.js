const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let member = message.guild.member(message.mentions.users.first())
    if(message.guild.member(message.mentions.users.first())) {
        message.channel.send(`<a:WaveBoy:492021595389558785> **Welcome ${member}!!**\nWe appreciate your support towards the community, it really does help us out a lot.\n\n**Instructions**\nIn order to receive your in game perks, you must join the server and ask a Lead Admin+ for your permissions. For the first tier, the permission you will need is 1, second, 2, third, 3. Do not pester them to give you your permissions, it will happen when it does.\n\n**Notes for Donators**\n- You will need to enter your command (/vip1 /vip2 or /vip3) every time you want to use a VIP tier vehicle.\n- Non-donators are unable to use the donator vehicles. They are blacklisted so you don't have to worry about people getting in them.`)
    }else
    (`<a:WaveBoy:492021595389558785> **Welcome new donator!!**\nWe appreciate your support towards the community, it really does help us out a lot.\n\n**Instructions**\nIn order to receive your in game perks, you must join the server and ask a Lead Admin+ for your permissions. For the first tier, the permission you will need is 1, second, 2, third, 3. Do not pester them to give you your permissions, it will happen when it does.\n\n**Notes for Donators**\n- You will need to enter your command (/vip1 /vip2 or /vip3) every time you want to use a VIP tier vehicle.\n- Non-donators are unable to use the donator vehicles. They are blacklisted so you don't have to worry about people getting in them.`)
    

    message.delete().catch(O_o=>{});
}

module.exports.help = {
    name: "don_message"
}
