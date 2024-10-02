const { EmbedBuilder } = require("discord.js");
const prefix = require('../config/config.json');
const throwdice = () => Math.floor(Math.random() * 6) + 1;

module.exports.details = {
  name: 'roll',
  description: 'Rolls a dice (6-sided).',
  author: 'Landen419',
  icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
  usage: `${prefix.prefix}roll`
};

module.exports.execute = (client, message, args) => {
  const result = throwdice();
  
  const embed = new EmbedBuilder()
    .setColor('#b434eb')
    .setTitle('Dice Roll Result')
    .setDescription(`The Number is: \`\`${result}\`\``)
    .setFooter({ text: "Made by Landen419", iconURL: "https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true" });

  message.channel.send({ embeds: [embed] });
};
