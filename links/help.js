const Discord = require("discord.js");
module.exports = {
  name: "help",
   run : async function(client, vest,args){
    let prefix = '/'
    const a = vest.content.split(' ')
   let sat = new Discord.MessageEmbed()
      .setTitle('Bot Help :')
      .setColor("Gray")
      .setDescription(`
      **bot cmd **
      ${a[0][0]}bot-link : create invite url of the bots
      ${prefix}server-link : create invite url of your server
      ${prefix}ping : bot pong!

      **antilink cmd **
      ${prefix}antilink-on : enable the antilink 
      ${prefix}antilink-off : disable the antilink 
      
      
      `)
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
   .setThumbnail(vest.author.avatarURL())
      .setFooter(`Requsted by: ${vest.author.username}`)
    vest.channel.send(sat)
   }
};



module.exports.help = {
  name: "help",
  description: "",
  usage: "/help"
};
