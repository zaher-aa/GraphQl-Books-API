module.exports = ({ dataValues: book }, args, { Author }) => {
  const bookAuthor = Author.findOne({ where: { id: book.authorId } });

  return bookAuthor;
};
