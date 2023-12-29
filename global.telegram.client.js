const { Client } = require('discord.js');
const TelegramBot = require('node-telegram-bot-api');

const discordToken = 'DISCORD_BOT_TOKEN'; 
const telegramToken = 'TELEGRAM_BOT_TOKEN'; 

const discordClient = new Client({ intents: [32767] });
const telegramBot = new TelegramBot(telegramToken, { polling: true });

discordClient.on('message', (message) => {
  const chatId = 'TELEGRAM_CHAT_ID';
  if (message.content.startsWith('.telegramGönder')) {
    const messageText = message.content.slice('.telegramGönder'.length).trim();
    telegramBot.sendMessage(chatId, `Discord'dan gelen mesaj: ${messageText}`);
  }
});
