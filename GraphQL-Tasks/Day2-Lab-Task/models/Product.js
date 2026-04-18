const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  categoryId: {
    type: Number,
    required: [true, "Category ID is required"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

if (mongoose.models.Product) {
  delete mongoose.models.Product;
}

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
