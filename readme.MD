`answerCbQuery` per toast in alto

    bot.action("0", (ctx) => {
      ctx.answerCbQuery("hai scelto no");
    });

-----

per taggare @${ctx?.from?.username}

ctx.reply(`@${ctx?.from?.username}`);

------

per dettagli su chi ha cliccato:

ctx.from

-----

console.log ma di telegram bot.reply();

-----

listen to action tipo click buttone

    bot.action("0", (ctx) => {
      ctx.answerCbQuery("hai scelto no");
      ctx.reply("ok, non partecipi");
    });

-----

mandare un sondaggio vero

    ctx.sendPoll("domanda a caso", ["risposta 1 SI", "risposta 2"], {
      is_anonymous: false
    })

------

random numero da 1 a 6. 
cubo routare 

    bot.hears("cubo", (ctx) => {
       ctx.sendDice()
    })

------

random numero da 0 a 1

    bot.hears("pallone", (ctx) => {
        ctx.sendDice({emoji: "⚽"})
      })

------