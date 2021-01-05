const Discord = require("discord.js");
module.exports= {
    name :'ping',
   run : async function(client, message ,args){
        let sat = new Discord.MessageEmbed()
      .setTitle('pong 🏳️ :')
      .setColor("Gray")
      .setDescription(`Taken Time : ${ message.createdTimestamp} 
            Discord API: ${client.ws.ping}`)
      .setAuthor(passion.author.username
  ,passion.author.avatarURL())
   .setThumbnail(passion.author.avatarURL())
      .setFooter(`Requsted by: ${passion.author.username}`)

   }
}
module.exports.help = {
  name: "ping",
  description: "Sends a pong respond back with the latency of the bot  ",
  usage: "/link"
};