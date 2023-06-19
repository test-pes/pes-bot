import { Telegraf } from "telegraf";

export default function botLogic() {
  const bot = new Telegraf("5928046156:AAFbqK2oaYG5AKse1WiOkKUWItzqqgYCIcc");

  bot.start((ctx) => ctx.reply("Welcome!"));
  bot.help((ctx) => ctx.reply("Send me a sticker"));
  bot.on("sticker", (ctx) => ctx.reply("👍"));
  bot.hears("hi", (ctx) => ctx.reply("Hey there!"));

  bot.hears("test", (ctx) => {
    // create poll
    ctx.reply("partecipi al campionato pes?", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "si", callback_data: "1" },
            { text: "no", callback_data: "0" },
          ],
        ],
      },
    });

    // handle callback
    bot.action("1", (ctx) => {
      ctx.answerCbQuery("hai scelto si");
      ctx.reply("ok, partecipi");
      ctx.reply(`il nome è ${JSON.stringify(ctx.from)}`);
      // tag the ctx.from.username
      ctx.reply(`@${ctx?.from?.username} partecipa al campionato`);

    });
    bot.action("0", (ctx) => {
      ctx.answerCbQuery("hai scelto no");
      ctx.reply("ok, non partecipi");
    });
  });

  bot.launch();
}