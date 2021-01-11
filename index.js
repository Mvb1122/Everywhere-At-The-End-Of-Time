const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
    msg.channel.send('pong');
  }
});

client.login(TOKEN);