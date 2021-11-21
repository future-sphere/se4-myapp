var express = require('express');
var router = express.Router();

const games = [
  { title: 'League of Legends', id: '1', genre: 'mmorpg' },
  { title: 'Roblox', id: '2', genre: 'fps' },
  { title: 'Rocket League', id: '3', genre: 'mmorpg' },
  { title: 'Minecraft', id: '4', genre: 'sandbox' },
  { title: 'World of Warcraft', id: '5', genre: 'rpg' },
  { title: 'Genshin Impact', id: '6', genre: 'rpg' },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(games);
});

// Params
router.get('/genre/:genre', function (req, res, next) {
  const genre = req.params.genre;
  const result = games.filter((v) => genre === v.genre);
  res.send(result);
});

// Query
router.get('/genre', function (req, res) {
  const genre = req.query.genre;
  const result = games.filter((v) => genre === v.genre);
  res.send(result);
});

module.exports = router;
