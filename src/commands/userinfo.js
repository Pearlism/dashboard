const { EmbedBuilder } = require('discord.js');
const dateformat = require('dateformat');
const prefix = require('../config/config.json');

module.exports.details = {
    name: 'userinfo',
    author: 'Landen419',
    icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
    description: 'Sends information about a given user.',
    usage: `${prefix.prefix}userinfo {@user}`
};

module.exports.execute = (client, message, args) => {
    const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;

    const infoEmbed = new EmbedBuilder()
        .setColor('#b434eb')
        .setThumbnail(member.user.displayAvatarURL())
        .setTitle(`User Info - ${member.user.username}`)
        .addFields(
            { name: "Username", value: `${member.user.username}#${member.user.discriminator}`, inline: true },
            { name: "ID", value: `${member.user.id}`, inline: true },
            { name: "Account Creation", value: dateformat(member.user.createdAt, 'dddd, mmmm dS, yyyy') },
            { name: "Joined Server", value: dateformat(member.joinedAt, 'dddd, mmmm dS, yyyy') },
            { name: 'Roles', value: member.roles.cache.map(r => `${r}`).join(' | ') || 'None', inline: true }
        )
        .setFooter({ text: 'Made by Landen419', iconURL: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true' });

    message.channel.send({ embeds: [infoEmbed] });
};
