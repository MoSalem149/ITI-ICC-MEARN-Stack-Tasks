const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID,
  GraphQLInputObjectType,
} = require("graphql");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categoryId: { type: GraphQLInt },
    createdBy: { type: GraphQLID },
  }),
});

const CreateProductDto = new GraphQLInputObjectType({
  name: "CreateProductDto",
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categoryId: { type: GraphQLInt },
  }),
});

module.exports = { ProductType, CreateProductDto };
