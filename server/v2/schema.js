const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Book {
    id: ID
    name: String
    authorId: Int
    author: Author
  }

  type Author {
    id: ID
    name: String
    books: [Book]
  }

  input BookInput {
    name: String!
    authorId: Int!
  }

  input AuthorInput {
    name: String!
    books: [BookInput]
  }

  type Query {
    getBooks: [Book]
    getBook(id: ID): Book
    getAuthors: [Author]
    getAuthor(id: ID): Author
  }

  type Mutation {
    addBook(input: BookInput): Book
    addAuthor(input: AuthorInput): Author
  }
`);
