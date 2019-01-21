const Discord = require('discord.js')

let config = require('../../botconfig.json')
let prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    let applicant = message.guild.member(message.mentions.users.first()) || message.guild.members.get(message.guild.members.get(args[0]))
    let dept = args[1]
    
    let sahp_channel = message.guild.channels.find('name', 'jcrp-sahp')
    let lssd_channel = message.guild.channels.find('name', 'jcrp-lssd')
    let lspd_channel = message.guild.channels.find('name', 'jcrp-lspd')
    let safd_channel = message.guild.channels.find('name', 'jcrp-safd')    

    if (!(message.member.roles.has('354093626592329739') || message.member.roles.has('481541340337930269'))) return message.reply("you are not allowed to use that command.")
    if (!applicant || applicant === null || applicant === undefined) return message.reply("I could not find that user.")
    if (!applicant.roles.has('354074696515584000')) return message.reply("that user does not have the 'Train Me' role.")
    if (!dept) return message.reply("you need to state a department.")

    if (dept.toUpperCase() == "SAHP") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SAHP training and has been given SAHP department roles. Give them a warm welcome!")
        .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        sahp_channel.send(embed)
        message.reply("done.")

        applicant.addRole('354095488666042380')
        applicant.addRole('354095512225316876')
        applicant.addRole('367796502824878080')
        applicant.addRole('354067549970890767')

        applicant.removeRole('354074453270986752')
        applicant.removeRole('354074696322514950')
        applicant.removeRole('354074696515584000')
    } else if (dept.toUpperCase() === "LSSD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSSD training and has been given LSSD department roles. Give them a warm welcome!")
        .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lssd_channel.send(embed)
        message.reply("done.")

        applicant.addRole('354095488666042380')
        applicant.addRole('354095512225316876')
        applicant.addRole('367796714586898433')
        applicant.addRole('354074458618855444')

        applicant.removeRole('354073428795588618')
        applicant.removeRole('354074696322514950')
        applicant.removeRole('354074696515584000')
    } else if (dept.toUpperCase() === "LSPD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their LSPD training and has been given LSPD department roles. Give them a warm welcome!")
        .setFooter("LSPD Department FTO", "https://i.imgur.com/QFigKNr.png")
        .setTimestamp()
        .setColor("#c2f1ff")

        lspd_channel.send(embed)
        message.reply("done.")

        applicant.addRole('354095488666042380')
        applicant.addRole('354095512225316876')
        applicant.addRole('500799280974397463')
        applicant.addRole('500800444616933406')

        applicant.removeRole('505871307041406997')
        applicant.removeRole('354074696322514950')
        applicant.removeRole('354074696515584000')
        
    } else if (dept.toUpperCase() === "SAFD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SAFD training and has been given SAFD department roles. Give them a warm welcome!")
        .setFooter("SAFD Department FTO", "https://i.imgur.com/yekwbNs.png")
        .setTimestamp()
        .setColor("#f6a8ff")

        safd_channel.send(embed)
        message.reply("done.")

        applicant.addRole('354095488666042380')
        applicant.addRole('354095512225316876')
        applicant.addRole('367796857272926218') 
        applicant.addRole('354086496996818946')

        applicant.removeRole('354088117806039040')
        applicant.removeRole('354074696322514950')
        applicant.removeRole('354074696515584000')

    } else if (dept.toUpperCase() === "SACD") 
    {
        let embed = new Discord.RichEmbed()
        .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
        .setDescription(applicant + " has passed their SACD training and has been given SACD department roles. Give them a warm welcome!")
        .setFooter("SAFD Department FTO", "https://i.imgur.com/yekwbNs.png")
        .setTimestamp()
        .setColor("#f6a8ff")

        safd_channel.send(embed)
        message.reply("done.")

        applicant.addRole('354095488666042380') // Law Enforcement
        applicant.addRole('354095512225316876') // First Responders
        applicant.addRole('367796857272926218') // Department
        applicant.addRole('354086496996818946') // Department initiating rank (Officer/Cadet/Prob.)

        applicant.removeRole('536989674560946186') // Train Me ()
        applicant.removeRole('354074696322514950') 
        applicant.removeRole('354074696515584000') 
    } else return message.reply("that is not a valid department.")

    message.delete().catch(O_o => {})

    

}

module.exports.help = {
    name: 'dept'
}