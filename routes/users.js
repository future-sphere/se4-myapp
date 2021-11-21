var express = require('express');
const { getUsers, createUser, updateUser, removeUser } = require('../controllers/users');
var router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', removeUser);

module.exports = router;
