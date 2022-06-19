const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addBook(input: BookInput!): Book
    addAuthor(input: AuthorInput!): Author
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
    age: Int!
    books: [Book!]!
  }

  input BookInput {
    name: String!
    pages: Int!
    authorId: ID!
  }

  input AuthorInput {
    name: String!
    age: Int!
  }
`;
