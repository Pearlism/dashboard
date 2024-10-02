const { EmbedBuilder } = require("discord.js");
const prefix = require('../config/config.json');
const dateformat = require('dateformat');
const number = require('easy-number-formatter');

module.exports.details = {
  name: 'serverinfo',
  description: 'Sends information about the current server!',
  author: 'Landen419',
  icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
  usage: `${prefix.prefix}serverinfo`
};

module.exports.execute = (client, message, args) => {
  const infoEmbed = new EmbedBuilder()
    .setColor('#b434eb')
    .setThumbnail(message.guild.iconURL())
    .setTitle(`Server Info - ${message.guild.name}`)
    .addFields(
      { name: "Server Name", value: `${message.guild.name}`, inline: true },
      { name: "Server Owner", value: `${message.guild.members.cache.get(message.guild.ownerId)}`, inline: true },
      { name: "ID", value: `${message.guild.id}` },
      { name: "Server Region", value: `${message.guild.region}` },
      { name: "Member Count", value: `${number.formatNumber(message.guild.memberCount)}` },
      { name: "Creation Date", value: dateformat(`${message.guild.createdAt}`, 'dddd, mmmm dS, yyyy') }
    )
    .setFooter({ text: "Made by Landen419", iconURL: "https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true" });

  message.channel.send({ embeds: [infoEmbed] });
};
