const startApolloServer = require('./v3/app');
const { typeDefs, resolvers } = require('./v3/graphql');

startApolloServer(typeDefs, resolvers);
