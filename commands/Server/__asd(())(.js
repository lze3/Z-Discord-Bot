const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    try {
        eval(args.join(" "))
    } catch (err) {
        console.log("Error:\n" + err.toString())
    }
}

module.exports.help = {
    name: 'test_c'
}

