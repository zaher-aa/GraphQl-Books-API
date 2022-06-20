module.exports = async (
  parent,
  { input: { name, pages, authorId } },
  { Book }
) => {
  const newBook = await Book.create({ name, pages, authorId });
  return newBook;
};
