require('dotenv').config();
const {Telegraf, Markup} = require('telegraf');
const fetch = require('node-fetch').default
const {MenuTemplate, MenuMiddleware} = require('telegraf-inline-menu')

const bot = new Telegraf(process.env.BOT_TOKEN);
if (bot === undefined) {
    throw new Error('BOT_TOKEN must be provided!')
}

bot.start((ctx) => {
    bot.telegram.sendMessage(ctx.chat.id,'Click to check your timetable :)',
    {
        reply_markup: {
            inline_keyboard:[   
                [
                    {text: 'JX', callback_data:'jx'},
                    {text: 'Valencia',callback_data:'val'}
                ],
                [
                    {text: 'Ian', callback_data:'ian'},
                    {text: 'NatChua',callback_data:'nat'}
                ]
            ]
        }
    })    
})

bot.launch();