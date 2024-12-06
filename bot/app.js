import { Telegraf, Markup } from 'telegraf'

const token = '7858522673:AAHhspDvYpJCGSe0VWoUyLEqJhJmH2762y8'
const webAppUrl = 'https://mysteryboxofpandora.github.io/I_AM_A_LIZARD/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Hello, goy!', Markup.inlineKeyboard([
        Markup.button.webApp(
            'Open App',
            `${webAppUrl}?ref=${ctx.payload}`
        )
    ]))
})

bot.launch()