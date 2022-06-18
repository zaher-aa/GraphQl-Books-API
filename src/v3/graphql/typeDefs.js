const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Book {
    id: ID!
    name: String!
    authorId: ID!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    authorBooks: [Book!]!
  }
`;
