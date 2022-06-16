const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLList,
} = require('graphql');

const AUTHORS = [
  { id: 1, name: 'J.R.R. Tolkien' },
  { id: 2, name: 'J.K. Rowling' },
  { id: 3, name: 'Brent Weeks' },
];

const BOOKS = [
  {
    id: 1,
    name: 'Book 1',
    authorId: 1,
  },
  {
    id: 2,
    name: 'Book 2',
    authorId: 2,
  },
  {
    id: 3,
    name: 'Book 3',
    authorId: 1,
  },
  {
    id: 4,
    name: 'Book 4',
    authorId: 2,
  },
  {
    id: 5,
    name: 'Book 5',
    authorId: 3,
  },
];

const app = express();

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return BOOKS.filter((book) => book.authorId === author.id);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: 'Book',
  description: 'This is a book entity',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    author: {
      type: new GraphQLNonNull(AuthorType),
      resolve: (book) => {
        return AUTHORS.find((author) => author.id === book.authorId);
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    book: {
      type: BookType,
      description: 'A single book',
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (parent, args) => {
        return BOOKS.find((book) => book.id === args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      description: 'List of all books',
      resolve: () => BOOKS,
    },
    author: {
      type: AuthorType,
      description: 'A single author',
      args: { id: { type: new GraphQLNonNull(GraphQLInt) } },
      resolve: (parent, args) => {
        return AUTHORS.find((author) => author.id === args.id);
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all authors',
      resolve: () => AUTHORS,
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBook: {
      type: BookType,
      description: 'Adds a new book',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, { name, authorId }) => {
        const newBook = { id: BOOKS.length + 1, name, authorId };
        BOOKS.push(newBook);
        return newBook;
      },
    },
    addAuthor: {
      type: AuthorType,
      description: 'Adds a new author',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, { name }) => {
        const newAuthor = { id: AUTHORS.length + 1, name };
        AUTHORS.push(newAuthor);
        return newAuthor;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

app.set('port', 3000);
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
