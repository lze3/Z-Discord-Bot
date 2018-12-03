const Discord = require("discord.js")
const images = ('../images/special.png')

module.exports.run = async (bot, message, args) => {
    message.delete();

        let user;
        // If the user mentions someone, display their stats. If they just run userinfo without mentions, it will show their own stats.
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
            user = message.author;
        }

        let status = user.presence.status
        if (status === 'online')
            status = 'Online';
        if (status === 'offline')
            status = 'Offline';
        if (status === 'idle')
            status = 'Idle';
        if (status === 'dnd')
            status = 'Do Not Disturb';

        // Define the member of a guild.
        const member = message.guild.member(user);

        let acknow;
        if (user.id === '264662751404621825')
            acknow = 'Bot creator!';
        else
            acknow = 'None';

        if (member.roles.has('501076418399043604') || member.roles.has('455237281402585089'))
            icon = 'https://i.imgur.com/sT3ev1X.png';
        else
            icon = member.author.avatarURL;

        
        //Discord rich embed
        const whois = new Discord.RichEmbed()
        .setColor('#C2F1FF')
        .setAuthor(`${user.username}#${user.discriminator}`, member.avatarURL)
        .addField('Status', status, true)
        .addField('Joined', member.joinedAt, true)
        .addField('Registered', user.createdAt, true)
        .addField('Roles', member.roles.map(roles => `<@&${roles.id}>`).join(' '), true)
        .addField('Acknowledgements', acknow)
        .setThumbnail(icon)

        
        message.channel.send(whois)/*.then(msg => msg.delete(25000));  */
}

module.exports.help = {
    name: "_whois"
}