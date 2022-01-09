var express = require('express');
const {
  getUserByName,
  getUsers,
  createUser,
  updateUser,
  removeUser,
  getUserByAge,
  getUserById,
} = require('../controllers/users');
var router = express.Router();

router.get('/', getUsers);
router.get('/id', getUserById);
router.get('/name', getUserByName);
router.get('/age', getUserByAge);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', removeUser);

module.exports = router;
