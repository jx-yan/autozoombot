require('dotenv').config();
const {Telegraf, Markup} = require('telegraf');

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
                ],
                [
                    {text: 'Exit', callback_data: 'exit'}
                ]
            ]
        }
    })
})

bot.action('exit', ctx => {
    ctx.answerCbQuery();
    ctx.reply('Thank you for using AutoZoom!')
})

bot.action('jx', ctx => {
    // ctx.answerCbQuery('Timetable loaded');
    // ctx.reply('Tue\n0815 - 1130: IS210 - BPAS (G6)\n1530 - 1845: IS216 - WAD2 (G6)\n\nThu\n0815 - 1130: IS211 - IDP (G9)\n\nFri\n1200 - 1515: CORIS1702 - CT (G5)')
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Tue\n0815 - 1130: IS210 - BPAS (G6)\n1530 - 1845: IS216 - WAD2 (G6)\n\nThu\n0815 - 1130: IS211 - IDP (G9)\n\nFri\n1200 - 1515: CORIS1702 - CT (G5)',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text:'BPAS Zoom', callback_data:'bpaszoom'},
                    {text:'WAD Zoom', callback_data:'wadzoom'}
                ],
                [
                    {text:'IDP Zoom', callback_data:'idpzoom'},
                    {text:'CT Zoom', callback_data:'ctzoom'}
                ],
                [
                    {text:'Back to Menu', callback_data:'menu'}
                ]
            ]
        }
    })
})

bot.action('ian', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Tue\n0815 - 1130: IS210 - BPAS (G6)\n1530 - 1845: IS216 - WAD2 (G6)\n\nThu\n0815 - 1130: IS211 - IDP (G9)\n\nFri\n1200 - 1515: CORIS1702 - CT (G5)',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text:'BPAS Zoom', callback_data:'bpaszoom'},
                    {text:'WAD Zoom', callback_data:'wadzoom'}
                ],
                [
                    {text:'IDP Zoom', callback_data:'idpzoom'},
                    {text:'CT Zoom', callback_data:'ctzoom'}
                ],
                [
                    {text:'Back to Menu', callback_data:'menu'}
                ]
            ]
        }
    })
})

bot.action('nat', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Tue\n0815 - 1130: IS210 - BPAS (G6)\n1530 - 1845: IS216 - WAD2 (G6)\n\nThu\n0815 - 1130: IS211 - IDP (G9)\n\nFri\n1200 - 1515: CORIS1702 - CT (G5)',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text:'BPAS Zoom', callback_data:'bpaszoom'},
                    {text:'WAD Zoom', callback_data:'wadzoom'}
                ],
                [
                    {text:'IDP Zoom', callback_data:'idpzoom'},
                    {text:'CT Zoom', callback_data:'ctzoom'}
                ],
                [
                    {text:'Back to Menu', callback_data:'menu'}
                ]
            ]
        }
    })
})

bot.action('val', ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, 'Tue\n0815 - 1130: IS210 - BPAS (G6)\n1530 - 1845: IS216 - WAD2 (G6)\n\nThu\n0815 - 1130: IS211 - IDP (G9)\n\nFri\n1200 - 1515: CORIS1702 - CT (G5)',
    {
        reply_markup: {
            inline_keyboard: [
                [
                    {text:'BPAS Zoom', callback_data:'bpaszoom'},
                    {text:'WAD Zoom', callback_data:'wadzoom'}
                ],
                [
                    {text:'IDP Zoom', callback_data:'idpzoom'},
                    {text:'CT Zoom', callback_data:'ctzoom'}
                ],
                [
                    {text:'Back to Menu', callback_data:'menu'}
                ]
            ]
        }
    })
})

bot.action('menu',ctx => {
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id,'Click to check your timetable',
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
                ],
                [
                    {text: 'Exit', callback_data: 'exit'}
                ]
            ]
        }
    })
})


bot.launch();