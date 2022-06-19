module.exports = async (parent, { id }, { Author }) => {
  const author = await Author.findOne({ where: { id } });
  await Author.destroy({ where: { id } });

  return author;
};
