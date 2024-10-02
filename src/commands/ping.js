const { EmbedBuilder } = require("discord.js");
const config = require('../config/config.json');

module.exports.details = {
  name: 'ping',
  description: 'Ping / Pong!',
  author: 'Landen419',
  icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
  usage: `${config.prefix}ping`
};

module.exports.execute = (client, message, args) => {
  if (message && message.channel && typeof message.channel.send === 'function') {
    message.channel.send('Pong!');
  } else {
    console.error('Message object is invalid or channel.send is not a function.');
  }
};
