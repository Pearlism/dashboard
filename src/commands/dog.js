const { EmbedBuilder } = require("discord.js");
const prefix = require('../config/config.json');
const fetch = require("node-fetch");

module.exports.details = {
    name: 'dog',
    author: 'Landen419',
    icon: 'https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true',
    description: 'Sends a random image of a dog.',
    usage: `${prefix.prefix}dog`
};

module.exports.execute = async (client, message, args) => {
    const uri = "https://dog.ceo/api/breeds/image/random";
    try {
        const response = await fetch(uri);
        const json = await response.json();

        const dogEmbed = new EmbedBuilder()
            .setColor('#b434eb')
            .setTitle('Dog')
            .setImage(json.message)
            .setFooter({ text: "Made by Landen419", iconURL: "https://images-ext-1.discordapp.net/external/8HoYZi2R23wyzpl1FNkcMq067MLssrOvB3zD3j0yu90/https/cdn.discordapp.com/avatars/1271143681654788106/3882db9d5332493982da4fb92ecef618.webp?animated=true" });

        await message.channel.send({ embeds: [dogEmbed] });
    } catch (error) {
        console.error(error);
        message.channel.send('Sorry, I could not fetch a dog image at this time.');
    }
};
