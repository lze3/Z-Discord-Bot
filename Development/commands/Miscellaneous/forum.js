const request = require('request')
const Discord = require('discord.js')

const config = require('../../botconfig.json')
const prefix = config.prefix

module.exports.run = async(bot, message, args) => {
    var site = "https://forum.fivem.net"
    let avatar = "https://i.imgur.com/ODI3OLT.png"
    request.get(`${site}/categories.json`, function(err, response, body) {
        var main = JSON.parse(body)
        const categories = main.category_list.categories
        var arg = args.join(" ")
        if (args[0] == "user") {          
            let argum = args.join(" ").slice(5)
            request.get(`${site}/users/${argum}/summary.json`, function(error, response, bod33) {
                let main = JSON.parse(bod33)
                try {
                    if (main.errors) { 
                        console.log(main.errors)
                        return message.channel.send("There was no user found")                         
                    }

                    let likes_given = main.user_summary.likes_given;
                    let likes_received = main.user_summary.likes_received;
                    let topics_entered = main.user_summary.topics_entered;
                    let posts_read_count = main.user_summary.posts_read_count;
                    let days_visited = main.user_summary.days_visited;
                    let topic_count = main.user_summary.topic_count;
                    let post_count = main.user_summary.post_count;                    
                    let link = `${site}/users/${argum}`;
                    if (main.topics) {
                        var topic = main.topics[0]
                        var topicTitle = topic.title
                        var topicCount = topic.posts_count;
                        var topic_final = `**[${topicTitle}](${site}/t/${topic.id})**\nPosts: **${topicCount}**`;
                    } else {
                        var topic_final = `None`;
                    }
                    let user_embed = new Discord.RichEmbed()
                    .setAuthor("JCRP Bot", avatar)
                    .setColor('#FF5722')
                    .setThumbnail(avatar)
                    .setTitle("FiveM User Search")
                    .addField("Username", argum)
                    .addField("Likes Given", likes_given)
                    .addField("Likes Received", likes_received)
                    .addField("Topics Entered", topics_entered)
                    .addField("Posts Read", posts_read_count)
                    .addField("Days Visited", days_visited)
                    .addField("Topic Count", topic_count)
                    .addField("Post Count", post_count)
                    .addField("Forum Link", link)
                    message.channel.send({ embed: user_embed })
                    return;
                } catch(err) {
                    console.log(err)
                    console.log("No user found (forum)")
                    message.channel.send("Could not find user.")
                }
            })
            return;
        };
        if (args[0] == "search") {
            let argum = args.join(" ").slice(6)
            request.get(`${site}/search/query.json?term=${argum}`, function(err, response, bod) {
                
                var main2 = JSON.parse(bod)
                try {
                    if (main2.topics.length == 0 || main2.topics.length == null || main2.topics.length == []) {
                        return util.embed("There was no thread found");
                    }
                    let posts = main2.posts
                    let topics = main2.topics

                    var sarch = new Discord.RichEmbed()
                    .setAuthor("JCRP Bot", avatar)
                    .setColor('#FF5722')
                    .setThumbnail(avatar)
                    .setTitle("FiveM Forums Search")
                    .setURL(site)
                    topics.forEach(function (data) {
                        if (data.visible === true || data.visible === true) {
                            let link = `${site}/t/${data.id}/`
                            sarch.addField(data.title, `${link}\nPosts count: **${data.posts_count}**\nVisible: **${data.visible}**\nClosed: **${data.closed}**\n`)
                        }
                    })
                message.channel.send({ embed: sarch })
                console.log("FiveM Forum Search")
                return;
                } catch(e) {
                    console.log(e)
                    message.channel.send("Could not find search.")
                }
            })
        }
    })
}

module.exports.help = {
    name: 'fstats'
}