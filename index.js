// Load the necessary libraries
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Initialize the bot with specific "Intents" 
// (These tell Discord what kind of data the bot is allowed to see)
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// Runs once when the bot successfully connects to Discord
client.once('ready', () => {
    console.log('--------------------------');
    console.log(`✅ EchoBuddy is online!`);
    console.log(`Logged in as: ${client.user.tag}`);
    console.log('--------------------------');
});

// Listens for every message sent in servers the bot is in
client.on('messageCreate', message => {
    // Safety check: Ignore messages from other bots (or itself)
    if (message.author.bot) return;

    // Command: !ping
    if (message.content === '!ping') {
        message.reply('🏓 Pong! EchoBuddy is active.');
    }

    // Command: !echo [text]
    if (message.content.startsWith('!echo ')) {
        const say = message.content.slice(6); // Removes "!echo " from the start
        if (!say) return message.reply("You didn't give me anything to echo!");
        
        message.channel.send(`📣 **Echo:** ${say}`);
    }
});

// Logs the bot in using the secret token from your .env file
client.login(process.env.BOT_TOKEN);
