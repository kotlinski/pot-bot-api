const express = require('express');
const path = require('path');
const pot_bot = require('pot-bot');
const PORT = process.env.PORT || 5000;
const timeout = require('connect-timeout');
/*

runPotBot = async function (api_key, no_of_lines, game_type) {
  const draw = await pot_bot.fetchCurrentDraw(api_key, game_type);
  console.log(`draw: ${JSON.stringify(draw, null, 2)}`);
  return await pot_bot.analyzeCurrentDraw(game_type, no_of_lines);
};*/

/*
express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', async (req, res) => {
      res.setHeader('Content-type', "application/octet-stream");
      res.setHeader('Content-disposition', 'attachment; filename=file.txt');
      const bets_to_print = await runPotBot(req.query.api_key, req.query.no_of_lines, 'stryktipset');
      res.send(bets_to_print.printable);
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`)).setTimeout(500000);
*/

const options = {async: true, pot_bot: pot_bot};

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index', options))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

