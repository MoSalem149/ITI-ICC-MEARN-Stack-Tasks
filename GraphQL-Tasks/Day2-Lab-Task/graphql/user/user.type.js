const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
} = require("graphql");
const { type } = require("node:os");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const AuthPayload = new GraphQLObjectType({
  name: "AuthPayload",
  fields: () => ({
    token: { type: new GraphQLNonNull(GraphQLString) },
    user: { type: UserType },
  }),
});

module.exports = { UserType, AuthPayload };
