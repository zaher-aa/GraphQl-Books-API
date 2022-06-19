const { getBooks, getBook, addBook } = require('./books');
const { getAuthors, getAuthor, addAuthor } = require('./authors');

module.exports = {
  Query: {
    books: getBooks,
    book: getBook,
    authors: getAuthors,
    author: getAuthor,
  },
  Mutation: {
    addBook,
    addAuthor,
  },
};
