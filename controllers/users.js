const UserModel = require('../schema/users');

const getUserById = async (req, res) => {
  const response = await UserModel.findById(req.query.id);

  res.json(response);
};

const getUsers = async (req, res) => {
  const response = await UserModel.find();

  res.json(response);
};

const getUserByName = async (req, res) => {
  // find a user by name: GET /users/name?name=Tim => {name: 'Tim', ...}

  const { name } = req.query;

  const regex = new RegExp(name, 'i');

  const response = await UserModel.find({
    name: regex,
  });

  res.json(response);
};

const getUserByAge = async (req, res) => {
  const { age, minAge, maxAge } = req.query;

  let response = null;
  if (age) {
    response = await UserModel.find({
      age,
    });
  } else if (minAge && maxAge) {
    response = await UserModel.find({
      age: {
        $gte: minAge,
        $lte: maxAge,
      },
    });
  }

  res.json(response);
};

const createUser = async (req, res) => {
  const { name, age } = req.body;

  try {
    if (!name) {
      throw 'Name is missing!';
    }
    if (!age) {
      throw 'Age is missing!';
    }
    const response = await UserModel.create({
      name,
      age,
    });

    res.json(response);
  } catch (error) {
    return res.json(error);
  }
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

    if (response) {
      return res.json(response);
    } else {
      throw `User with id ${userId} does not exist!`;
    }
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  removeUser,
  getUserByName,
  getUserByAge,
  getUserById,
};
