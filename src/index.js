const startApolloServer = require('./v3/app');
const { typeDefs, resolvers } = require('./v3/graphql');
const {
  models: { Author, Book },
} = require('./v3/db/models');

startApolloServer(typeDefs, resolvers, { Author, Book });
