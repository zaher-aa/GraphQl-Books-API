module.exports = async ({ dataValues: author }, args, { Book }) => {
  const books = Book.findAll({ where: { authorId: author.id } });

  return books;
};
