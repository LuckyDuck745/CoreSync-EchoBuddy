const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// When the bot is ready, run this code once
client.once('ready', () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
});

// Listen for messages
client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // The Echo command
    if (message.content.startsWith('!echo ')) {
        const say = message.content.slice(6);
        message.channel.send(`📣 **EchoBuddy says:** ${say}`);
    }

    // The Ping command
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }
});

// Login to Discord with your client's token
client.login(process.env.BOT_TOKEN);
