var express = require('express');
const { getAllTodos } = require('../controllers/todos');
var router = express.Router();

router.get('/', getAllTodos);

module.exports = router;
