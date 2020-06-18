const express = require('express');
const path = require('path');
const pot_bot = require('pot-bot');
const PORT = process.env.PORT || 5000;

function runPotBot() {
  const myPromise = (new Promise(pot_bot.fetchCurrentDraw('asdf', 'stryktipset')))
      .then(draw => draw)
      .catch(err => err);

  console.log(`myPromise: ${JSON.stringify(myPromise, null, 2)}`);
  return myPromise;

}

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.json(runPotBot()))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
