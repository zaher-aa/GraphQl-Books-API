const {
  models: { Book },
} = require('../../../db/models');

module.exports = async () => {
  const books = await Book.findAll();
  return books;
};
