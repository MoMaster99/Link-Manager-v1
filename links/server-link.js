const Discord = require("discord.js");
module.exports={
  name :'server-link',
   run : async function(client, vest,args){
 var fg = await vest.channel.createInvite({maxAge: 86400});
 let li = new Discord.MessageEmbed()
 .setColor("Gray")
 .setAuthor(vest.author.username
  ,vest.author.avatarURL())
  .setThumbnail(vest.author.avatarURL())
 
  .setDescription(`
 **[Click Here ](${fg}) **

 [add my ](https://discord.com/oauth2/authorize?client_id=718474940109684786&permissions=8&scope=bot)    [support server](https://discord.gg/xyWYrbHx)
   `)


 
 let ar = new Discord.MessageEmbed()
 .setColor("Gray")
  .setAuthor(vest.author.username
  ,vest.author.avatarURL())
  .setThumbnail(vest.guild.iconURL())
 .setDescription("Done")

 vest.channel.send(ar)
 vest.author.send(li)
 }
}


module.exports.help = {
  name: "server-link",
  description: "make ainvite to server",
  usage: "/server-link"
};