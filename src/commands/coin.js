const { EmbedBuilder } = require("discord.js");
const prefix = require('../config/config.json');

module.exports.details = {
    name: 'coin',
    author: 'Landen419',
    icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
    description: 'Simple coin flip command',
    usage: `${prefix.prefix}coin`
};

module.exports.execute = async (client, message, args) => {
    const flip = () => {
        const rand = ['Heads!', 'Tails!'];
        return rand[Math.floor(Math.random() * rand.length)];
    };

    const resultEmbed = new EmbedBuilder()
        .setColor('#b434eb')
        .setTitle('Coin Flip Result')
        .setDescription(`The result is: \`\`${flip()}\`\``)
        .setFooter({ text: "Made by Landen419", iconURL: "https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true" });

    await message.channel.send({ embeds: [resultEmbed] });
};
