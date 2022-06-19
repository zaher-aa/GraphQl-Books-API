const {
  getBooks,
  getBook,
  addBook,
  getAuthorBooks,
  deleteBook,
} = require('./books');
const {
  getAuthors,
  getAuthor,
  addAuthor,
  getBookAuthor,
  deleteAuthor,
} = require('./authors');

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
    deleteBook,
    deleteAuthor,
  },
  Author: {
    books: getAuthorBooks,
  },
  Book: {
    author: getBookAuthor,
  },
};
