const { GraphQLNonNull, GraphQLID } = require("graphql");
const { ProductType, CreateProductDto } = require("./product.type");
const Product = require("../../models/Product");

const productMutations = {
  createProduct: {
    type: ProductType,
    args: {
      productInput: { type: new GraphQLNonNull(CreateProductDto) },
    },
    resolve: async (_, { productInput }, { req }) => {
      if (!req.user) {
        const error = new Error("Not Authorized");
        error.code = 401;
        throw error;
      }

      const product = new Product({
        ...productInput,
        createdBy: req.user.userId,
      });

      return await product.save();
    },
  },
  updateProduct: {
    type: ProductType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      productInput: { type: new GraphQLNonNull(CreateProductDto) },
    },
    resolve: async (_, { id, productInput }, { req }) => {
      if (!req.user) {
        const error = new Error("Not Authorized");
        error.code = 401;
        throw error;
      }
      const product = await Product.findById(id);
      if (!product) {
        const error = new Error("Product not found");
        error.code = 404;
        throw error;
      }
      if (product.createdBy.toString() !== req.user.userId) {
        const error = new Error("Not Authorized to update this product");
        error.code = 401;
        throw error;
      }
      Object.assign(product, productInput);
      return await product.save();
    },
  },
};

module.exports = productMutations;
