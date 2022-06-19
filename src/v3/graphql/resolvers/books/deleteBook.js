module.exports = async (parent, { id }, { Book }) => {
  const book = await Book.findOne({ where: { id } });
  await Book.destroy({ where: { id } });

  return book;
};
