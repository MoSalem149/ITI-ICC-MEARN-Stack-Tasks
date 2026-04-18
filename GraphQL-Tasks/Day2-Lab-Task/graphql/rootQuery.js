const { GraphQLObjectType } = require("graphql");
const productQueries = require("./product/product.query");
const userQueries = require("./user/user.query");

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    ...productQueries,
    ...userQueries,
  },
});

module.exports = RootQuery;
