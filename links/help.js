const Discord = require("discord.js");
module.exports = {
  name: "help",
   run : async function(client, vest,args){
    let prefix = '/'
   let sat = new Discord.MessageEmbed()
      .setTitle('Bot Help :')
      .setColor("Gray")
      .setDescription(`
      **bot cmd **
      ${prefix}bot-link : create invite url of the bots
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