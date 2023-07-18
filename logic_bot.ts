// @ts-nocheck

import * as t from "telegraf";
import { message } from "telegraf/filters";

const uri =
  "mongodb+srv://testtelegram:72756f0408@pesbot.kixclcz.mongodb.net/?retryWrites=true&w=majority";

export default function botLogic() {
  const bot = new t.Telegraf("5928046156:AAFbqK2oaYG5AKse1WiOkKUWItzqqgYCIcc");

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

  bot.hears("sondaggio", async (ctx) => {
    const sondaggioValore = await ctx.sendPoll(
      "domanda a caso",
      ["risposta 1 SI", "risposta 2"],
      {
        is_anonymous: false,
      },
    );

    bot.on(message("poll"), (ctx) => {
      ctx.reply(`${JSON.stringify(sondaggioValore, false, 4)}`);
    })

  });


  bot.hears("dado", (ctx) => {
    ctx.sendDice();
  });

  bot.hears("pallone", (ctx) => {
    ctx.sendDice({ emoji: "⚽" });
  });

  bot.hears("slotMachine", (ctx) => {
    ctx.sendDice({ emoji: "🎰" });
  });

  bot.hears("bowling", (ctx) => {
    ctx.sendDice({ emoji: "🎳" });
  });

  bot.hears("basket", (ctx) => {
    ctx.sendDice({
      emoji: "🏀",
    });
  });

  // bot.hears("test", (ctx) => {
  //   ctx.sendDice();
  //   ctx.reply(`${JSON.stringify(ctx.message, false, 4)}`)
  // })

  // bot.on(message("dice"), (ctx) => {
  //   ctx.reply(`${ctx.message.dice.value}`)
  // })

  bot.hears("test", async (ctx) => {
    // Send a dice message and wait for it to be sent
    const diceMessage = await ctx.sendDice();
    // Reply with the value of the dice
    ctx.reply(`The value is ${diceMessage.dice.value}`);
  });

  bot.launch();
}
