const TodoModel = require('../schema/todos');

const getAllTodos = (req, res) => {
  TodoModel.find({}).then((doc) => {
    res.json(doc);
  });
};

module.exports = {
  getAllTodos,
};
