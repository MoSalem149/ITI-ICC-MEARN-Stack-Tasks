const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
} = require("graphql");
const { ProductType } = require("./product.type");
const Product = require("../../models/Product");

const productQueries = {
  products: {
    type: new GraphQLList(ProductType),
    args: {
      name: { type: GraphQLString },
      minPrice: { type: GraphQLFloat },
      maxPrice: { type: GraphQLFloat },
      categoryId: { type: GraphQLInt },
    },
    resolve: async (_, { name, minPrice, maxPrice, categoryId }, { req }) => {
      if (!req.user) {
        const error = new Error("Not Authorized");
        error.code = 401;
        throw error;
      }
      const filter = { createdBy: req.user.userId };
      if (name) {
        filter.name = { $regex: name, $options: "i" };
      }
      if (minPrice !== undefined || maxPrice !== undefined) {
        filter.price = {};
        if (minPrice !== undefined) filter.price.$gte = minPrice;
        if (maxPrice !== undefined) filter.price.$lte = maxPrice;
      }
      if (categoryId) {
        filter.categoryId = categoryId;
      }
      return await Product.find(filter);
    },
  },
  product: {
    type: ProductType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (_, { id }, { req }) => {
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
        const error = new Error("Not Authorized to view this product");
        error.code = 401;
        throw error;
      }
      return product;
    },
  },
};

module.exports = productQueries;
