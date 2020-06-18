const express = require('express');
const path = require('path');
const pot_bot = require('pot-bot');
const PORT = process.env.PORT || 5000;

runPotBot = async function (api_key, no_of_lines, game_type) {
  const draw = await pot_bot.fetchCurrentDraw(api_key, game_type);
  console.log(`draw: ${JSON.stringify(draw, null, 2)}`);
  return await pot_bot.analyzeCurrentDraw(game_type, no_of_lines);
};

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', async (req, res) => {
      const bets_file_ref = await runPotBot(req.query.api_key, req.query.no_of_lines, 'stryktipset');
      res.sendFile(bets_file_ref);
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
