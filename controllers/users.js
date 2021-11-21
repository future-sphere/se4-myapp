const UserModel = require('../schema/users');

const getUsers = async (req, res) => {
  const response = await UserModel.find();

  res.json(response);
};

const createUser = async (req, res) => {
  const { name, age } = req.body;

  const response = await UserModel.create({
    name,
    age,
  });

  res.json(response);
};

const updateUser = async (req, res) => {
  const { userId, age, name } = req.query;

  try {
    if (!userId) throw 'Missing user id';
    if (!age) throw 'Missing age';
    if (!name) throw 'Missing name';

    const response = await UserModel.findByIdAndUpdate(
      userId,
      {
        $set: {
          age,
          name,
        },
      },
      {
        new: true,
      },
    );

    if (!response) throw 'User not found';

    res.json(response);
  } catch (error) {
    res.json(error);
  }
};

const removeUser = async (req, res) => {
  const { userId } = req.query;

  try {
    if (!userId) {
      throw 'User Id is Missing';
    }
    const response = await UserModel.findByIdAndRemove(userId);

    return res.json(response);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser,
};
