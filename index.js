const express = require('express');
const path = require('path');
const pot_bot = require('pot-bot');
const PORT = process.env.PORT || 5000;

async function runPotBot(api_key, game_type) {
  return await pot_bot.fetchCurrentDraw(api_key, game_type);
}

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.json(runPotBot(req.query.api_key, 'stryktipset')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
