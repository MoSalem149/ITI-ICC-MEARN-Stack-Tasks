const { GraphQLSchema } = require("graphql");
const RootQuery = require("./rootQuery");
const RootMutation = require("./rootMutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
