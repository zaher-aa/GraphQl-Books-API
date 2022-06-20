module.exports = async (parent, { id }, { Book }) => {
  const book = await Book.findOne({ where: { id } });
  return book;
};
