const {
  models: { Book },
} = require('../../../db/models');

module.exports = async (parent, { input: { name, pages, authorId } }) => {
  const newBook = await Book.create({ name, pages, authorId });
  return newBook;
};
