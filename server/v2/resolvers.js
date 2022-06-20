module.exports = {
  getBooks: () => 'returns all the books',
  getBook: (id) => 'returns a book',
  getAuthors: () => 'returns all authors',
  getAuthor: (id) => 'returns an author',
  addBook: ({ name, authorId }) => 'Creates a book and returns it',
  addAuthor: ({ name, books }) => 'Creates an author and returns it',
};
