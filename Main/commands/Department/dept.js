
const Discord = require('discord.js')
const config = require('../../botconfig.json')
const prefix = config.prefix

const sahp =
{
    ["id"] : '367796502824878080',
    ["start"] : '354067549970890767',
    ["trn"] : '354074453270986752',
    ["fto"] : '354074444265947147'
}

const lspd = 
{
    ["id"] : '500799280974397463',
    ["start"] : '500800444616933406',
    ["trn"] : '505871307041406997',
    ["fto"] : '505550111099584512'
}

const lssd = 
{
    ["id"] : '367796714586898433',
    ["start"] : '354074458618855444',
    ["trn"] : '354073428795588618',
    ["fto"] : '354074456940871681'
}

const safd = 
{
    ["id"] : '367796857272926218',
    ["start"] : '354086496065683456',
    ["trn"] : '354088117806039040',
    ["fto"] : '354087776259538954'
}

module.exports.run = async(bot, message, args) => {
    let user_s = message.author;
    let user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) // target
    if (message.member.roles.has('505550111099584512') || message.member.roles.has('354074456940871681') || message.member.roles.has('354074444265947147') || message.member.roles.has('354087776259538954') || message.member.roles.has('481541340337930269') || message.guild.name === 'JusticeCommunityRP - Development')
    {
        if (user_t) 
        {
            if (args[1] !== "")
            {
                if (args[1] === 'lspd' && (message.member.roles.has('505550111099584512') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
                {
                    let LSPD_c = message.guild.channels.find('name', 'jcrp-lspd')
                    let embed = new Discord.RichEmbed()
                    .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                    .setDescription(user_t + " has passed their LSPD training and has been given LSPD department roles! Give them a warm welcome!")
                    .setFooter("LSPD Department FTO", "https://i.imgur.com/TRW0Nu0.png")
                    .setTimestamp()
                    .setColor("#94d2ff")

                    if (message.guild.id === '354062777737936896')
                    {
                        if (user_t.roles.has(lspd.trn))
                        {
                            user_t.addRole(lspd.id)
                            user_t.addRole(lspd.start)
                            user_t.addRole('354095488666042380') // Law Enforcement
                            user_t.addRole('354095512225316876') // First Responders

                            user_t.removeRole(lspd.trn) // Train Me (SAHP)
                            user_t.removeRole('354074696515584000') // Train Me
                            
                            if (user_t.roles.has('354074696322514950'))
                            {
                                user_t.removeRole('354074696322514950') // Interview Me
                            }
                            LSPD_c.send(embed)
                        }
                        else
                        {
                            message.channel.send(message.author + ", that user does not have the train me role.")
                        }
                    }
                    else
                    {
                        message.channel.send(embed)
                    }
                }
                else if (args[1] === 'lssd' && (message.member.roles.has('367796714586898433') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
                {
                    let LSSD_c = message.guild.channels.find('name', 'jcrp-lssd')
                    let embed = new Discord.RichEmbed()
                    .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                    .setDescription(user_t + " has passed their LSSD training and has been given LSSD department roles! Give them a warm welcome!")
                    .setFooter("LSSD Department FTO", "https://i.imgur.com/tLIylue.png")
                    .setTimestamp()
                    .setColor("#b8ffab")

                    if (message.guild.id === '354062777737936896')
                    {
                        if (user_t.roles.has(lssd.trn))
                        {
                            user_t.addRole(lssd.id)
                            user_t.addRole(lssd.start)
                            user_t.addRole('354095488666042380') // Law Enforcement
                            user_t.addRole('354095512225316876') // First Responders

                            user_t.removeRole(lssd.trn) // Train Me (SAHP)
                            user_t.removeRole('354074696515584000') // Train Me
                            
                            if (user_t.roles.has('354074696322514950'))
                            {
                                user_t.removeRole('354074696322514950') // Interview Me
                            }
                            LSSD_c.send(embed)
                        }
                        else
                        {
                            message.channel.send(message.author + ", that user does not have the train me role.")
                        }
                    }
                    else
                    {
                        message.channel.send(embed)
                    }
                }

                else if (args[1] === 'sahp' && (message.member.roles.has('354074444265947147') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
                {
                    let SAHP_c = message.guild.channels.find('name', 'jcrp-sahp')
                    let embed = new Discord.RichEmbed()
                    .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                    .setDescription(user_t + " has passed their SAHP training and has been given SAHP department roles! Give them a warm welcome!")
                    .setFooter("SAHP Department FTO", "https://i.imgur.com/mVLhtCc.png")
                    .setTimestamp()
                    .setColor("#f7fd92")

                    if (message.guild.id === '354062777737936896')
                    {
                        if (user_t.roles.has(sahp.trn))
                        {
                            user_t.addRole(sahp.id)
                            user_t.addRole(sahp.start)
                            user_t.addRole('354095488666042380') // Law Enforcement
                            user_t.addRole('354095512225316876') // First Responders

                            user_t.removeRole(sahp.trn) // Train Me (SAHP)
                            user_t.removeRole('354074696515584000') // Train Me
                            
                            if (user_t.roles.has('354074696322514950'))
                            {
                                user_t.removeRole('354074696322514950') // Interview Me
                            }
                            SAHP_c.send(embed)
                        }
                        else
                        {
                            message.channel.send(message.author + ", that user does not have the train me role.")
                        }
                    }
                    else
                    {
                        message.channel.send(embed)
                    }
                }

                else if (args[1] === 'safd' && (message.member.roles.has('354087776259538954') || message.member.roles.has('481541340337930269')) || message.guild.name === 'JusticeCommunityRP - Development')
                {
                    let SAFD_c = message.guild.channels.find('name', 'jcrp-safd')
                    let embed = new Discord.RichEmbed()
                    .setAuthor("FTO message from " + message.author.username, message.author.avatarURL)
                    .setDescription(user_t + " has passed their SAHP training and has been given SAFD department roles! Give them a warm welcome!")
                    .setFooter("SAFD Department FTO", "https://i.imgur.com/mVLhtCc.png")
                    .setTimestamp()
                    .setColor("#f6a8ff")

                    if (message.guild.id === '354062777737936896')
                    {
                        if (user_t.roles.has(safd.trn))
                        {
                            user_t.addRole(safd.id)
                            user_t.addRole(safd.start)
                            user_t.addRole('354095512225316876') // First Responders

                            user_t.removeRole(safd.trn)
                            user_t.removeRole('354074696515584000') // Train Me
                            
                            if (user_t.roles.has('354074696322514950'))
                            {
                                user_t.removeRole('354074696322514950') // Interview Me
                            }
                            SAFD_c.send(embed)
                        }
                        else
                        {
                            message.channel.send(message.author + ", that user does not have the train me role.")
                        }
                    }
                    else
                    {
                        message.channel.send(embed)
                    }
                }

                else
                {
                    message.channel.send(user_s + ", improper usage. `" + prefix + module.exports.help.name + " user dept`")
                }
            }
            else
            {
                message.channel.send(user_s + ", improper usage. `" + prefix + module.exports.help.name + " user dept`. No arguments provided.")
            }
        }
        else
        {
            message.channel.send(user_s + ", I could not find that user.")
        }

    }
    else
    {
        message.channel.send(user_s + ", you do not have permission to use that command.")
    }
    console.log(message.author.username + " entered a command [ " + module.exports.help.name + " ]\nargs[0]: " + args[0] + "\nargs[1]: " + args[1])
    message.delete().catch(O_o => {});
}

module.exports.help = {
    name: 'dept'
}