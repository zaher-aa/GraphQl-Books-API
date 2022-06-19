module.exports = async (parent, args, { Author }) => {
  const authors = await Author.findAll();
  return authors;
};
