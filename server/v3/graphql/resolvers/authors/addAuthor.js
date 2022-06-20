module.exports = async (parent, { input: { name, age } }, { Author }) => {
  const newAuthor = await Author.create({ name, age });
  return newAuthor;
};
