const { getBooks, getBook } = require('./books');
const { getAuthors, getAuthor } = require('./authors');

module.exports = {
  Query: {
    books: getBooks,
    book: getBook,
    authors: getAuthors,
    author: getAuthor,
  },
};
