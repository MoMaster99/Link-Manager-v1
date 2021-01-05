const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const fs = require("fs");
const moment = require("moment");
client.commands = new Discord.Collection();

fs.readdir("./links/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
   
    return;
  }
  jsfile.forEach((f, i) => {
    let props = require(`./links/${f}`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", async => {
  console.log(` ${client.user.tag} `);
  client.user.setStatus("idle");
  client.user.setActivity(``, {
    type: "PLAYING"
  });
});



client.login(config.token);

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0].toLowerCase();
  let args = messageArray.slice(1).join(" ")
  let user = message.mentions.members.first();
  let channel = message.mentions.channels.first();


 
  

  try {
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args,user,channel,config,prefix);
  } catch (e) {
    console.log(e.message);
  } finally {
  }
});
const prefix = config.prefix;

const antilink = JSON.parse(fs.readFileSync('./data/antilink.json' , 'utf8'));

client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink-off")) {
       if(!message.channel.guild) return ;
      let gg = new Discord.MessageEmbed()
      .setTitle('Error  :')
      .setColor("Gray")
      .setDescription(`**Sorry But You Dont Have Permission** \`MANAGE_GUILD\``)
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())


        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(gg);
antilink[message.guild.id] = {
onoff: 'Off',
}
let done = new Discord.MessageEmbed()
      .setTitle('Done   :')
      .setColor("Gray")
      .setDescription(' Done disable the antilink  ✅')
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())
 .setFooter(`Requsted by: ${message.author.username}`)
message.channel.send(done)
          fs.writeFile("./data/antilink.json", JSON.stringify(antilink), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antilink-on")) {
            let gg = new Discord.MessageEmbed()
      .setTitle('Error  :')
      .setColor("Gray")
      .setDescription(`**Sorry But You Dont Have Permission** \`MANAGE_GUILD\``)
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())
        if(!message.channel.guild) return ;
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(gg);
antilink[message.guild.id] = {
onoff: 'On',
}
let done = new Discord.MessageEmbed()
      .setTitle('Done   :')
      .setColor("Gray")
      .setDescription(' Done enable the antilink ✅ ')
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())
 .setFooter(`Requsted by: ${message.author.username}`)
message.channel.send(done)
          fs.writeFile("./data/antilink.json", JSON.stringify(antilink), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }else{
            if(message.content==prefix+'antilink') {
              let error = new Discord.MessageEmbed()
      .setTitle('Error   :')
      .setColor("Gray")
      .setDescription(`
      Cmd :
      ${prefix}antilink-on for enable the antilink 
       ${prefix}antilink-off for disable the antilink 
      `)
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())
 .setFooter(`Requsted by: ${message.author.username}`)
message.channel.send(error)
            }
          }
 
        })
client.on('message', message => {
  let link = /(http|https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if(message.content==link){
            if(!antilink[message.guild.id]) antilink[message.guild.id] = {
onoff: 'Off'

 }
 let er = new Discord.MessageEmbed()
      .setTitle('Anti  link :')
      .setColor("Gray")
      .setDescription(`The anti link is on you cant send this message`)
      .setAuthor(message.author.username
  ,message.author.avatarURL())
   .setThumbnail(message.author.avatarURL())


 if(antilink[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(er)
    }
});
