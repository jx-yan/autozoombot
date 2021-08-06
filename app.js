require('dotenv').config();
const {Telegraf, Markup} = require('telegraf');
const fetch = require('node-fetch').default
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')

const bot = new Telegraf(process.env.BOT_TOKEN);
if (bot === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

bot.start((ctx) => {
    ctx.reply('Welcome to AutoZoomBot!');
    
})

bot.launch();