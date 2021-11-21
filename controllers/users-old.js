const users = require('../seeds/users');

const ITEMS_PER_PAGE = 5;

const findUserById = (id) => users.find((v) => v.id === +id);

const findUsersByGender = (gender) => users.filter((v) => v.gender === gender);

const findUsersInDepartment = (department) =>
  users.filter((v) => v.department.split(' ').join('') === department);

const paginate = (data, page) => {
  return {
    data: data.splice((page - 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE),
    currentPage: page,
    totalPages: Math.ceil(data.length / ITEMS_PER_PAGE),
    totalCount: data.length,
  };
};

module.exports = {
  findUserById,
  findUsersByGender,
  findUsersInDepartment,
  paginate,
};
