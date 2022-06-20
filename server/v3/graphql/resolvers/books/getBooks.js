module.exports = async (parent, args, { Book }) => {
  const books = await Book.findAll();
  return books;
};
