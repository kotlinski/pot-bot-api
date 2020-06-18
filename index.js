const express = require('express');
const path = require('path');
const pot_bot = require('pot-bot');
const PORT = process.env.PORT || 5000;

async function runPotBot(api_key, game_type) {
  const draw =  await pot_bot.fetchCurrentDraw(api_key, game_type);
  console.log(`draw: ${JSON.stringify(draw, null, 2)}`);
  return draw;
}

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.json(runPotBot(req.query.api_key, 'stryktipset')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
