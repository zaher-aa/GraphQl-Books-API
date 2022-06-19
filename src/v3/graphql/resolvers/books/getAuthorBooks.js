const {
  models: { Book },
} = require('../../../db/models');

module.exports = async ({ dataValues: author }) => {
  const books = Book.findAll({ where: { authorId: author.id } });

  return books;
};
