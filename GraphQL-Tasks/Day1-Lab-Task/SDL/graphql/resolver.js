const products = require("../data");
const productSchema = require("../schemas/product.schema");

module.exports = {
  products: () => {
    return products;
  },
  product: ({ id }) => {
    const product = products.find((p) => p.id == id);
    if (!product) {
      const error = new Error("Product not found");
      error.code = 404;
      throw error;
    }
    return product;
  },
  createProduct: ({ productInput }) => {
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
  updateProduct: ({ id, productInput }) => {
    const idx = products.findIndex((p) => p.id == id);
    if (idx === -1) {
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
    products[idx] = { ...products[idx], ...productInput };
    return products[idx];
  },
};
