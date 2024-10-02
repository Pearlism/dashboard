const { EmbedBuilder } = require('discord.js');
const prefix = require('../config/config.json');
const moment = require("moment");
require("moment-duration-format");
const dateformat = require('dateformat');

module.exports.details = {
    name: 'Stats',
    author: 'Landen419',
    icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
    description: 'Statistics about your BOT.',
    usage: `${prefix.prefix}stats`
};

module.exports.execute = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const infoEmbed = new EmbedBuilder()
        .setColor('#b434eb')
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle(`${client.user.username} - Stats`)
        .addFields(
            { name: "Username", value: `${client.user.username}#${client.user.discriminator}` },
            { name: "Server Count", value: `${client.guilds.cache.size}` },
            { name: "Uptime", value: duration },
            { name: "Response Time", value: `${Math.round(client.ws.ping)}ms` },
            { name: "Creation Date", value: dateformat(client.user.createdAt, 'dddd, mmmm dS, yyyy, h:MM TT') }
        )
        .setFooter({ text: "Made by Landen419", iconURL: "https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true" });

    message.channel.send({ embeds: [infoEmbed] });
};
