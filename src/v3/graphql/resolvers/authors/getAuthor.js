const {
  models: { Author },
} = require('../../../db/models');

module.exports = async (parent, { id }) => {
  const author = await Author.findOne({ where: { id } });
  return author;
};
