const Discord = require("discord.js");
module.exports={
  name :'bot-link',
   run : async function(client, passion,args){
     let prefix = "/";
    if (!passion.member.hasPermission('ADMINISTRATOR')) return passion.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`');
    var sa = passion.content.split(" ").slice(1).join(" ")
    var Tt =passion.mentions.users.first() 
    let ar = new Discord.MessageEmbed()
      .setTitle(' Error :')
      .setColor("Gray")
      .setDescription(`
 Cmd :
 ${prefix}Link <id bot>
 
 Ex : 
 ${prefix}Link ${passion.author.id}
 `)
     let tr = new Discord.MessageEmbed()
      .setTitle(' Error :')
      .setColor("Gray")
      .setDescription(`
 You can't mentions this user
 `)
 if(Tt) return  passion.reply(tr) ;
    if (!args) return passion.reply(ar)
    let sat = new Discord.MessageEmbed()
      .setTitle('Bot link :')
      .setColor("Gray")
      .setDescription(`**[Click Here](https://discord.com/oauth2/authorize?client_id=${args}&permissions=8&scope=bot)**`)
      .setAuthor(passion.author.username
  ,passion.author.avatarURL())
   .setThumbnail(passion.author.avatarURL())
      .setFooter(`Requsted by: ${passion.author.username}`)


    passion.channel.send(sat)
  }
}

module.exports.help = {
  name: "bot-link",
  description: "invite url of the bots",
  usage: "/bot-link"
};
