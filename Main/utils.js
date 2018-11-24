global.user_s = message.author
global.user_t = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]) 

global.roles = 
{
    sahp =
    {
        "dept" : "367796502824878080",
        "fto" : "354074444265947147",
        "srank" : "354067549970890767",
        "highc" : "405444705560559618"
    },

    lspd =
    {
        "dept" : "500799280974397463",
        "fto" : "505550111099584512",
        "srank" : "500800444616933406",
        "highc" : "500799280974397463"
    },

    lssd =
    {
        "dept" : "367796714586898433",
        "fto" : "354074456940871681",
        "srank" : "354074458618855444",
        "highc" : "367796714586898433"
    },

    safd =
    {
        "dept" : "367796857272926218",
        "fto" : "354087776259538954",
        "srank" : "354086496996818946",
        "highc" : "405456643497918464"
    }


}