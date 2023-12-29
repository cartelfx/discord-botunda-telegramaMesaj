const { Client } = require('discord.js');
const TelegramBot = require('node-telegram-bot-api');

const discordToken = 'DISCORD_BOT_TOKEN'; 
const telegramToken = 'TELEGRAM_BOT_TOKEN'; 

const discordClient = new Client({intents: [32767]});
const telegramBot = new TelegramBot(telegramToken, { polling: true });

discordClient.on('message', (message) => {
  const chatId = 'TELEGRAM_CHAT_ID';

  telegramBot.sendMessage(chatId, `Discord'dan gelen mesaj: ${message.content}`);
});
