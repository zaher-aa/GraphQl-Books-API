const {
  models: { Author },
} = require('../../../db/models');

module.exports = async (parent, { input: { name, age } }) => {
  const newAuthor = await Author.create({ name, age });
  return newAuthor;
};
