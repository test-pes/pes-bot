// @ts-nocheck

import { Telegraf } from "telegraf";

import mongoose from "mongoose";
import { on } from "events";

const uri =
  "mongodb+srv://testtelegram:72756f0408@pesbot.kixclcz.mongodb.net/?retryWrites=true&w=majority";

export default function botLogic() {
  const bot = new Telegraf("5928046156:AAFbqK2oaYG5AKse1WiOkKUWItzqqgYCIcc");

  // const arrayPartecipanti = [];
  // bot.start((ctx) => ctx.reply("Welcome!"));
  // bot.help((ctx) => ctx.reply("Send me a sticker"));
  // bot.on("sticker", (ctx) => ctx.reply("👍"));
  // bot.hears("hi", (ctx) => ctx.reply("Hey there!"));
  // bot.hears("all", (ctx) =>
  //   ctx.reply(
  //     `ecco tutti i partecipanti: ${
  //       arrayPartecipanti.length === 0
  //         ? "*nessuno attualmente*".toUpperCase()
  //         : JSON.stringify(arrayPartecipanti)
  //     }`,
  //   ),
  // );

  // bot.hears("test", (ctx) => {
  //   // create poll
  //   ctx.reply("partecipi al campionato pes?", {
  //     reply_markup: {
  //       inline_keyboard: [
  //         [
  //           { text: "si", callback_data: "1" },
  //           { text: "no", callback_data: "0" },
  //         ],
  //       ],
  //     },
  //   });

  //   bot.action("1", (ctx) => {
  //     ctx.reply(`il nome è ${JSON.stringify(ctx.from)}`);

  //     arrayPartecipanti.push(ctx.from);
  //     ctx.reply(`@${ctx?.from?.username} partecipa al campionato`);
  //   });
  //   bot.action("0", (ctx) => {
  //     ctx.reply("ok, non partecipi");
  //   });
  // });

  bot.hears("sondaggio", (ctx) => {
    ctx.sendPoll("domanda a caso", ["risposta 1 SI", "risposta 2"], {
      is_anonymous: false
    })
    // ctx.replyWithQuiz("domanda a caso", ["risposta 1 SI", "risposta 2"] )
    // ctx.reply("reply normale, per vedere se il sondaggio reply è il problema oppure il codice id in generale che da l'errore")
    // bot.command('poll', (ctx) =>{
    //   let abc = ["Juice", "Tea"]
    //   ctx.replyWithPoll(
    //     'Your Fav Drink',
    //     abc,
    //     { is_anonymous: false }
    //   )
    // })
    // bot.on('poll_answer', (ctx) => bot.reply(ctx.pollAnswer))
  })

  bot.launch();
}
