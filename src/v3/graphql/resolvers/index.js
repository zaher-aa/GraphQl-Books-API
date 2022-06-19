const { getBooks, getBook, addBook, getAuthorBooks } = require('./books');
const {
  getAuthors,
  getAuthor,
  addAuthor,
  getBookAuthor,
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
  },
  Author: {
    books: getAuthorBooks,
  },
  Book: {
    author: getBookAuthor,
  },
};
