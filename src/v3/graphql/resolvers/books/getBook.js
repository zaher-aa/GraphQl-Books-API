const {
  models: { Book },
} = require('../../../db/models');

module.exports = async (parent, { id }) => {
  const book = await Book.findOne({ where: { id } });
  return book;
};
