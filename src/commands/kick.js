const { EmbedBuilder } = require('discord.js');
const prefix = require('../config/config.json');

module.exports.details = {
    name: 'kick',
    author: 'Landen419',
    icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
    description: 'Kicks a user from the server.',
    usage: `${prefix.prefix}kick {@user}`
};

module.exports.execute = async (client, message, args) => {
    const { member, mentions } = message;
    const tag = `<@${member.id}>`;

    if (message.guild.members.me.permissions.has('KickMembers')) {
        if (member.permissions.has('Administrator') || member.permissions.has('KickMembers')) {
            const target = mentions.users.first();
            if (target) {
                const targetMember = message.guild.members.cache.get(target.id);
                try {
                    await targetMember.kick();
                    const kickEmbed = new EmbedBuilder()
                        .setColor('#eb9d17')
                        .setTitle('User Kicked')
                        .addFields(
                            { name: 'User', value: `${target} was kicked from the server!` },
                            { name: 'Moderator', value: `${member}` }
                        )
                        .setThumbnail(target.displayAvatarURL())
                        .setFooter({ text: 'Made by Landen419', iconURL: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true' });
                    
                    await message.channel.send({ embeds: [kickEmbed] });
                } catch (error) {
                    console.error(error);
                    message.channel.send(`${tag} I was unable to kick that user.`);
                }
            } else {
                message.channel.send(`${tag} please specify a user!`);
            }
        } else {
            message.channel.send(`${tag} you don't have permission.`);
        }
    } else {
        message.channel.send(`${tag} Sorry, I don't have permission to kick members!`);
    }
};
