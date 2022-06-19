const {
  models: { Author },
} = require('../../../db/models');

module.exports = ({ dataValues: book }) => {
  const bookAuthor = Author.findOne({ where: { id: book.authorId } });

  return bookAuthor;
};
