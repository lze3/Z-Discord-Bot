const Discord = require('discord.js')

const fs = require('fs')

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    if(!message.member.roles.has('481541340337930269')) return message.channel.send(message.author + ", you do not have permission to use that command.")
    let fName = args[0]
    if(!fName) return message.channel.send(message.author + ", no arguments provided.")
    try {
        delete require.cache[require.resolve(`../commands/Automated/${fName}.js`)]
        await fs.readdir("../commands/Automated", (err, files) => {
            let props = require(`../commands/Automated/${fName}.js`);
            bot.ConfigCommands.set(props.help.name, props);
        })
        let embed = new Discord.RichEmbed()
        .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
        .setColor('#F4613F')
    
        message.channel.send(embed)
    } catch(e) {
        try {
            delete require.cache[require.resolve(`../commands/Department/${fName}.js`)]
            await fs.readdir("../commands/Department", (err, files) => {
                let props = require(`../commands/Department/${fName}.js`);
                bot.ConfigCommands.set(props.help.name, props);
            })
            let embed = new Discord.RichEmbed()
            .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
            .setColor('#F4613F')
        
            message.channel.send(embed)
        } catch(e) {
            try {
                delete require.cache[require.resolve(`../commands/Development/${fName}.js`)]
                await fs.readdir("../commands/Development", (err, files) => {
                    let props = require(`../commands/Development/${fName}.js`);
                    bot.ConfigCommands.set(props.help.name, props);
                })
                let embed = new Discord.RichEmbed()
                .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
                .setColor('#F4613F')
            
                message.channel.send(embed)
            } catch(e) {
                try {
                    delete require.cache[require.resolve(`../commands/Miscellaneous/${fName}.js`)]
                    await fs.readdir("../commands/Miscellaneous", (err, files) => {
                        let props = require(`../commands/Miscellaneous/${fName}.js`);
                        bot.ConfigCommands.set(props.help.name, props);
                    })
                    let embed = new Discord.RichEmbed()
                    .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
                    .setColor('#F4613F')
                
                    message.channel.send(embed)
            } catch(e) {
                try {
                    delete require.cache[require.resolve(`../commands/Moderation/${fName}.js`)]
                    await fs.readdir("../commands/Moderation", (err, files) => {
                        let props = require(`../commands/Moderation/${fName}.js`);
                        bot.ConfigCommands.set(props.help.name, props);
                    })
                    let embed = new Discord.RichEmbed()
                    .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
                    .setColor('#F4613F')
                
                    message.channel.send(embed)
                } catch(e) {
                    try {
                        delete require.cache[require.resolve(`../commands/Server/${fName}.js`)]
                        await fs.readdir("../commands/Server", (err, files) => {
                            let props = require(`../commands/Server/${fName}.js`);
                            bot.ConfigCommands.set(props.help.name, props);
                        })
                        let embed = new Discord.RichEmbed()
                        .setDescription(`\`\`${fName}\`\`` + " command has been reloaded.")
                        .setColor('#F4613F')
                    
                        message.channel.send(embed)
                    } catch(e) {
                        message.channel.send(message.author + ", could not find command.")
                        console.log(e)
                    }
                }
            }
        }
    }
}


}
module.exports.help = {
    name: 'reload'
}