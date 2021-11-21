var express = require('express');
var router = express.Router();
const {
  findUserById,
  findUsersByGender,
  findUsersInDepartment,
  paginate,
} = require('../controllers/users');

router.get('/user/:id', function (req, res, next) {
  const { id } = req.params;
  const response = findUserById(id);
  res.json(response);
});

router.get('/user', function (req, res) {
  const { id } = req.query;
  const response = findUserById(id);
  res.json(response);
});

router.get('/user/gender', function (req, res) {
  const { gender, page } = req.query;
  const response = paginate(findUsersByGender(gender), page);
  res.json(response);
});

router.get('/gender/:gender', function (req, res) {
  const { gender } = req.params;
  const { page } = req.query;
  const response = paginate(findUsersByGender(gender), +page);
  res.json(response);
});

router.get('/department/:department', function (req, res) {
  const { department } = req.params;
  const { page } = req.query;
  const response = paginate(findUsersInDepartment(department), page);
  res.json(response);
});

router.get('/department', function (req, res) {
  const { department, page } = req.query;
  const response = paginate(findUsersInDepartment(department), page);
  res.json(response);
});

module.exports = router;
