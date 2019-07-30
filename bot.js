var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '-'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "533239591356989463") return;

  
  if (message.content.startsWith(prefix + 'ImDzGSw')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'ImDzGLs')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 


if (message.content.startsWith(prefix + 'ImDzGSn')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply(":white_check_mark: ${argresult");
} 

if (message.content.startsWith(prefix + 'ImDzGSa')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`:white_check_mark: ${argresult}**`);
}

if (message.content.startsWith(prefix + 'ImDzGSt')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 
if (message.content.startsWith(prefix + 'ImDzGSg')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`:white_check_mark: ${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
