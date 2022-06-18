const {
  models: { Author },
} = require('../../../db/models');

module.exports = async () => {
  const authors = await Author.findAll();
  return authors;
};
