const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const products = require("../data");
const productSchema = require("../schemas/product.schema");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    categoryId: { type: GraphQLInt },
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

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve: () => products,
    },
    product: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (_, { id }) => {
        const product = products.find((p) => p.id == id);

        if (!product) {
          const error = new Error("Product not found");
          error.code = 404;
          throw error;
        }

        return product;
      },
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createProduct: {
      type: ProductType,
      args: {
        productInput: { type: new GraphQLNonNull(CreateProductDto) },
      },
      resolve: (_, { productInput }) => {
        const { error } = productSchema.validate(productInput);

        if (error) {
          const customError = new Error("Validation Error");
          customError.code = 400;
          customError.data = error.details;
          throw customError;
        }

        const newProduct = {
          id: products.length + 1,
          ...productInput,
        };

        products.push(newProduct);
        return newProduct;
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        productInput: { type: new GraphQLNonNull(CreateProductDto) },
      },
      resolve: (_, { id, productInput }) => {
        const index = products.findIndex((p) => p.id == id);

        if (index === -1) {
          const error = new Error("Product not found");
          error.code = 404;
          throw error;
        }

        const { error } = productSchema.validate(productInput);

        if (error) {
          const customError = new Error("Validation Error");
          customError.code = 400;
          customError.data = error.details;
          throw customError;
        }

        products[index] = { ...products[index], ...productInput };
        return products[index];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
