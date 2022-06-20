module.exports = async (parent, { id }, { Author }) => {
  const author = await Author.findOne({ where: { id } });
  return author;
};
