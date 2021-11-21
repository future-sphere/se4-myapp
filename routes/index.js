var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('Hello world');
});

router.get('/names', function (req, res) {
  res.send('Bryan, Leo, Becky, Rick, Morty');
});

router.get('/games', function (req, res) {
  res.send('Lol, Roblox, Man of the house');
});

module.exports = router;
